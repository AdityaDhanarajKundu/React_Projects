import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { TourContext } from "./App";

function Tour({ id, image, info, price, name }) {
  const [readMore, setReadMore] = useState(false);
  const { removeTour } = useContext(TourContext);

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button type="button" onClick={() => setReadMore(!readMore)}>
            {readMore ? "Show Less" : "Read More"}
          </button>
        </p>
        <button className="delete-btn" onClick={()=> {removeTour(id)}}>Not Interested</button>
      </footer>
    </article>
  );
}

Tour.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Tour;
