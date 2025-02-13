import Product from "./Products";
import PropTypes from "prop-types";

function ProductSection({ title, products }) {
  return (
    <section>
      <h3>{title}</h3>
      <p className="exp"></p>
      
      <div className="articleContainer">
        {products?.map((product, i) => (
          <Product key={i} {...product} />
        ))}
      </div>
    </section>
  );
}

ProductSection.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          alt: PropTypes.string.isRequired,
        })
      ).isRequired,
      price: PropTypes.number.isRequired,
      addToCart: PropTypes.func.isRequired, // 🔹 addToCart debe ser una función
    })
  ).isRequired,
};


export default ProductSection;
