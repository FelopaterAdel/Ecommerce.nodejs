// src/pages/ProductDetails.jsx
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import axiosInstance from '../apis/config';
import { Link, useNavigate } from "react-router";


const ProductDetails = () => {
    const navigate = useNavigate();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error loading product:', err))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;
  const handleRedirect = (id) => {
    navigate(`/product-details/${id}`);
    };
  return (
    <div className="container mt-5">
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} className="img-fluid mb-3" />
      <p>{product.description}</p>
      <h5>Price: ${product.price}</h5>
      <h6>Brand: {product.brand}</h6>
      <h6>Category: {product.category}</h6>
      <div className="card-footer">
        <button
          className="btn btn-primary"
          onClick={() => handleRedirect(product.id)}
        >
          Add to Cart
        </button>
    </div>
    </div>

  );
};

export default ProductDetails;
