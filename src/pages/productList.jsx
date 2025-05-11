import { useState ,useEffect } from 'react';
import ProductCard from '../components/productCard';
import axiosInstance from "../apis/config";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get('/products', {
        params: {
          limit: itemsPerPage,
          skip: (currentPage - 1) * itemsPerPage, 
        },
      })
      .then((response) => {
        setProducts(response.data.products);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage)); 
      })
      .catch((error) => console.error('Error fetching products:', error))
      .finally(() => setIsLoading(false));
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
    
      <h2>Users List</h2>
      {isLoading && <div>Loading...</div>}
      <div className="mb-3">
      
      </div>
      <hr />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <ProductCard
              productItem={product}
              
            />
          </div>
        ))}
        
      </div>
      <div className="pagination-controls">
        <button
          className="btn btn-secondary"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-secondary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProductList;
