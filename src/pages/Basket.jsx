import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";
import BasketCard from "../component/BasketCard";

const Basket = () => {
  const { basket, removeAllBasket, isBasket, setIsBasket } =
    useContext(BasketContext);
  const total = basket.reduce((total, item) => total + item.amount, 0);
  const totalAmount = basket
    .reduce((total, i) => total + i.amount * i.price, 0)
    .toFixed(2);
  return (
    <div className="container my-5">
      <div className="d-flex flex-column gap-5 ">
        {basket.length === 0 ? (
          <div className=" d-flex flex-column align-items-center p-5 gap-5 shadow">
            <CiShoppingCart style={{ width: "120px", height: "120px" }} />
            <p className="text-light">
              Sepetiniz boş. Lütfen sepete biraz{" "}
              <Link to="/" className="text-danger text-decoration-underline">
                ürün
              </Link>{" "}
              ekleyiniz
            </p>
          </div>
        ) : (
          basket?.map((item) => <BasketCard item={item} key={item.id} />)
        )}
      </div>

      {basket.length === 0 ? (
        ""
      ) : (
        <div className="d-flex justify-content-between">
          <div className="rounded my-5 fs-4">
            <p>
              Sepette <span className="text-warning">{total}</span> adet ürün
              bulunmaktadır
            </p>
            <p>
              Toplam Fiyatı:{" "}
              <span className="text-success">{totalAmount}$</span>
            </p>
          </div>
          <div className="rounded my-5 py-3 fs-4">
            <button onClick={removeAllBasket} className="btn btn-success">
              Sepeti Onayla
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Basket;
