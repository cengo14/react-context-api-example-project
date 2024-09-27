import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { MdOutlineDeleteForever } from "react-icons/md";

const BasketCard = ({ item }) => {
  const { addToBasket, removeBasket, clearProduct } = useContext(BasketContext);
  return (
    <div className="d-flex flex-column flex-md-row gap-3 align-items-md-center justify-content-between shadow border-bottom pb-2">
      <div className="d-flex align-items-center gap-3">
        <div className="rounded bg-white">
          <img src={item.thumbnail} width={60} height={60} alt="product" />
        </div>
        <h4 className="text-truncate">{item.title}</h4>
      </div>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <h3 className="text-success text-nowrap pt-2">{item.price}$</h3>
        <p className="d-flex gap-2 fw-bold">
          <span>Miktar: </span>
          <span>{item.amount}</span>
        </p>
        <div className="d-flex gap-2">
          <button
            onClick={() => removeBasket(item.id)}
            className="btn btn-danger"
          >
            -
          </button>
          <button onClick={() => addToBasket(item)} className="btn btn-success">
            +
          </button>
          <button
            onClick={() => clearProduct(item.id)}
            className="btn btn-secondary px-2"
          >
            <MdOutlineDeleteForever style={{ fontSize: "20px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
