import React from "react";
import { useDispatch } from "react-redux";
import {removeFromCart,incrementByOne,decreaseByOne} from '../store/slices/cart'

const CartProduct = (props)=>{
    const {product} = props;
    const dispatch = useDispatch();

    return(
        <>
             <div className="d-flex align-items-center border-bottom py-3">
                <img src={product.images[0]} alt=".."  width="80" className="me-3"  />
                <div className="flex-grow-1">
                    <strong>{product.title}</strong>                    
                </div>
                <div className="d-flex align-items-center me-4">
                    <button className="btn btn-dark me-1" onClick={()=>{dispatch(incrementByOne(product.id))}}>+</button>
                    <span className="text-center w-25"  >{product.quantity}</span>
                    <button className="btn btn-outline-secondary ms-1" onClick={()=>{dispatch(decreaseByOne(product.id))}}>-</button>
                </div>
                <button className="btn btn-outline-danger me-4" onClick={()=>{dispatch(removeFromCart(product.id))}} >x</button>
                <p>${product.quantity * product.price}</p>
             </div>
        </>
    )
}

export default CartProduct;