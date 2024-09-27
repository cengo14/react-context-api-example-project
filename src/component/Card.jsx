import React, { useContext } from "react";
import HalfRating from "./Rating";
import { BsCartPlus } from "react-icons/bs";
import { BasketContext } from "../context/BasketContext";

const Card = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="card py-3 my-3 ">
      <div className="d-flex justify-content-end pe-4">
        {item.availabilityStatus === "Low Stock" ? (
          <p className="badge bg-danger">Sınırlı stok</p>
        ) : (
          <p className="badge">.</p>
        )}
      </div>
      <div className="d-flex justify-content-center py-2">
        <img
          className="object-fit-contain shadow"
          src={item.thumbnail}
          alt="product"
          height="200px"
        />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h3>{item.title}</h3>
          <p>{item.category}</p>
        </div>
        <div>
          <div className="d-flex justify-content-between fw-bolder">
            <div>
              <HalfRating value={item.rating} />
            </div>
            <p>{item.price}$</p>
          </div>
          <button
            onClick={() => addToBasket(item)}
            className="btn w-100 btn-primary d-flex justify-content-center align-items-center gap-1"
          >
            <BsCartPlus />
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
