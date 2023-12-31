import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function SingleColor({ rgb, weight, index, hexColor }) {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(","); // to convert the rgb number array into a comma separated string to be passed to the rgb() function in the inline css
  //   const hex = rgbToHex(...rgb); // to convert the rgb number array into a hex value
  const hexValue = `#${hexColor}`;
  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setAlert(false);
    },3000);
    return ()=>clearTimeout(timeout);
  },[alert]);

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={()=>{
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {alert && <p className="alert">copied to clipboard</p>}
    </article>
  );
}

SingleColor.propTypes = {
  rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
  weight: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SingleColor;
