import axios from "axios";
var catalog = [
  {
    _id: "123",
    price: 12.32,
    stock: 13,
    title: "Uwell 15W Pod",
    image: "1.png",
    discount: 5,
    category: "Esco Bars",
  },
  {
    _id: "124",
    price: 21.89,
    stock: 13,
    title: "Beco Mesh",
    image: "2.png",
    discount: 5,
    category: "Esco Bars",
  },
  {
    _id: "125",
    price: 15.5,
    stock: 13,
    title: "Geek Vape L200",
    image: "3.png",
    discount: 5,
    category: "Vaptio",
  },
  {
    _id: "126",
    price: 22.71,
    stock: 21,
    title: "Sky Solo Kit",
    image: "4.png",
    discount: 10,
    category: "Vaptio",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Mega Disposable",
    image: "5.png",
    discount: 0,
    category: "Vaptio",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Mesh & Ripe ",
    image: "6.png",
    discount: 0,
    category: "Esco Bars",
  },
  {
    _id: "127",
    price: 32.0,
    stock: 20,
    title: "Geek Vape Max100",
    image: "7.png",
    discount: 0,
    category: "Vaporesso",
  },
];

class DataService {
  async getCatalog() {
    // some instructions to
    let response = await axios.get("http://127.0.0.1:5000/api/catalog");
    let data = response.data;
    return data;
    // retrieve data from actual server
    // return catalog;
  }
  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/catalog",
      product
    );
    return response.data;
  }
  // get coupon
  async getCoupon() {
    let response = await axios.get("http://127.0.0.1:5000/api/coupon");
    let data = response.data;
    return data;
  }
  async saveCoupon(coupon) {
    let response = await axios.post("http://127.0.0.1:5000/api/coupon", coupon);

    return response.data;
  }
}
export default DataService;
