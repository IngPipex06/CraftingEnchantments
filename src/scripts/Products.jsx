import Carousel from "./Carousel";
import PropTypes from 'prop-types';

function Product({ name, price, images }) {
  return (
    <article className="product" data-name={name} data-price={price}>
      <h3>{name}</h3>

      {images.length > 1 ? (
        <Carousel images={images} />
      ) : (
        <figure>
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="catalogueImg" 
            style={{ width: "18.708vw" }} 
          />
        </figure>
      )}

      <button type="button" className="agregarAlCarrito">Agregar</button>
    </article>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  price: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Product;
