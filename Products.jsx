import Carousel from "./Carousel";
import PropTypes from 'prop-types';

function Product({ name, price, images }) {
  return (
    <article className="product">
      <h3>{name}</h3>
      <h3>Hola amiguitos</h3>

      {images.length > 1 ? (
        <Carousel images={images} />
      ) : (
        <figure>
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="catalogueImg" 
            loading="lazy" 
            style={{ width: "18.708vw" }} 
          />
        </figure>
      )}

      <p className="price">${price}</p>
      
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
  price: PropTypes.number.isRequired, // 🔹 Ahora price está validado
};

export default Product;
