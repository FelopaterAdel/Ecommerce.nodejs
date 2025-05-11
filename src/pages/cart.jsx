import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import React from "react";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cartItems);
  return (
    <>
      <h2 className="mb-4">Cart</h2>
      {cart.length == 0 ? (
        <p>Empty Cart</p>
      ) : (
        <>
          <div className="d-flex justify-content-between fw-bold border-bottom pb-2 mb-2">
            <span>Description</span>
            <span>Quantity</span>
            <span>Remove</span>
            <span>Price</span>
          </div>
          {cart.map((product) => (
            <CartCard product={product} key={product.id} />
          ))}
        </>
      )}
    </>
  );
}
