import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <article className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <p className="product-price">
          {product.price.toLocaleString('fr-DZ')} DA
        </p>

        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;