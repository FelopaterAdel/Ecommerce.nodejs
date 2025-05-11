
import { Link } from "react-router";
import { useDispatch } from "react-redux";
import {addToCart} from '../store/slices/cart'

const ProductCard = (props) => {

  const { productItem } = props

  const dispatch = useDispatch();

    const stockText = productItem.stock === 0 ? 'Out of stock' : 'In stock ';
    const stockBgColor = productItem.stock === 0 ? '#f8d7da' : '#d4edda';
  
  return (
    <div className="card h-100">
      <p style={{ backgroundColor: stockBgColor, display: "inline-block" }}
      >{stockText} {productItem.stock}</p>
      <img src={productItem.images[0]} className="card-img-top" alt={productItem.title} />
      <div className="card-body">
        <Link className="card-title" to={`/product-details/${productItem.id}`}>
          {productItem.title}
        </Link>
        <p className="card-text">
          {productItem.description}
        </p>
        <p className="card-text">
          {productItem.price}
        </p>
      </div>
      <div className="card-footer">
      <button disabled={productItem.stock==0} onClick={()=>dispatch(addToCart(productItem))} className="btn btn-primary mt-auto text-white text-decoration-none">Add to Cart</button>          



      </div>
    </div>
  );
}

export default ProductCard;