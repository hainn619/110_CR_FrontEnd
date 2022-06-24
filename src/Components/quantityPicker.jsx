import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  let [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    let value = quantity;
    value = value + 1;
    setQuantity(value);
    props.onChange(value);
  };

  const handleDecrease = () => {
    let value = quantity;

    if (value > 1) {
      value = value - 1;
      setQuantity(value);
      props.onChange(value);
    }
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-primary btn-sm" onClick={handleDecrease}>
        -
      </button>
      <label>{quantity}</label>
      <button className="btn btn-primary btn-sm" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};
export default QuantityPicker;
