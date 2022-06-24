import "./admin.css";
import { useState, useEffect } from "react";
import DataService from "./../services/dataService";

const Admin = () => {
  const [product, setProduct] = useState({});
  const [allproduct, setAllProduct] = useState([]);
  const [coupon, setCoupon] = useState({});
  const [allcoupon, setALlCoupon] = useState([]);

  const loadProduct = async () => {
    let service = new DataService();
    let data = await service.getCatalog();
    setAllProduct(data);
  };

  const loadCoupon = async () => {
    let service = new DataService();
    let data = await service.getCoupon();
    setALlCoupon(data);
  };

  useEffect(() => {
    loadCoupon();
    loadProduct();
  }, []);

  const textChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    product[name] = val;
    let copy = { ...product };
    copy[name] = val;
    setProduct(copy);

    console.log(e.target.name, e.target.value);
  };

  const saveProduct = async () => {
    console.log("save product", product);
    let productCopy = { ...product };
    productCopy.price = +productCopy.price;

    let service = new DataService();
    await service.saveProduct(productCopy);

    let copy = [...allproduct];
    copy.push(product);
    setAllProduct(copy);
  };

  const saveCoupon = async () => {
    console.log("save coupon", coupon);
    let service = new DataService();
    let couponCopy = { ...coupon };
    couponCopy.discount = parseFloat(couponCopy.discount);

    await service.saveCoupon(couponCopy);
    //add the coupon to allCoupon Array
    let copy = [...allcoupon];
    copy.push(couponCopy);
    setALlCoupon(copy);
    //todo: send the coupon to service ->back end
  };
  const couponChange = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    coupon[name] = val;
    let copy = { ...coupon };
    copy[name] = val;
    setCoupon(copy);
  };
  //   const renderList = allcoupon.map((item) => <li>{item}</li>);
  return (
    <div className="admin-page">
      <h4>Admin Site - Upload Product</h4>
      <div className="content">
        <section className="products">
          <h5>Register New Product</h5>
          <div className="field">
            <label>Product Name</label>
            <input
              name="title"
              onChange={textChange}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="field">
            <label>Price</label>
            <input
              name="price"
              onChange={textChange}
              className="form-control"
              type="number"
            ></input>
          </div>
          <div className="field">
            <label>Category</label>
            <input
              name="category"
              onChange={textChange}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="field">
            <label>Image</label>
            <input
              name="image"
              onChange={textChange}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="field">
            <button onClick={saveProduct} className="btn btn-primary">
              Register Product
            </button>
          </div>
          <ul>
            {allproduct.map((c, index) => (
              <li key={index}>
                {c.title}- {c.price}
              </li>
            ))}
          </ul>
        </section>
        <section className="coupon">
          <h5>Coupon Code</h5>
          <div className="field">
            <label>Coupon Code</label>
            <input
              name="code"
              onChange={couponChange}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="field">
            <label>Discount</label>
            <input
              name="discount"
              onChange={couponChange}
              className="form-control"
              type="text"
            ></input>
          </div>
          <div className="field">
            <button onClick={saveCoupon} className="btn btn-primary">
              Register Coupon
            </button>
          </div>
          <hr></hr>
          <ul>
            {allcoupon.map((c, index) => (
              <li key={index}>
                {c.code}- {c.discount}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};
export default Admin;
