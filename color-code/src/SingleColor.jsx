import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SingleColor({ rgb, weight, index, hexColor}) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(","); // to convert the rgb number array into a comma separated string to be passed to the rgb() function in the inline css
//   const hex = rgbToHex(...rgb); // to convert the rgb number array into a hex value

  return (
    <article className={`color ${index>10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bcg})` }}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexColor}</p>
    </article>
  );
}

SingleColor.propTypes = {
  rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
  weight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleColor;
