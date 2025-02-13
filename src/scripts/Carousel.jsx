import PropTypes from 'prop-types';

Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    })
  ).isRequired,
};


function Carousel({ images }) {
    
  return (
    <div className="carousel">
      <div className="carouselList">
        {images.map((img, index) => (
          <figure key={index}>
            <img 
              src={img.src} 
              alt={img.alt} 
              className="catalogueImg" 
              style={{ width: "18.708vw" }} 
            />
          </figure>
        ))}
      </div>
      <div className="carouselButtons">
        <button aria-label="Volver" className="previous" type="button"> &#129092; </button>
        <button aria-label="Siguiente" className="next" type="button"> &#129094; </button>
      </div>
    </div>
  );
}

export default Carousel;
