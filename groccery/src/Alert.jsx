import { useEffect } from "react";
import PropTypes from "prop-types";

function Alert({ type, msg, removeAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <h2 className={`alert alert-${type}`}>{msg}</h2>;
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  removeAlert: PropTypes.func.isRequired,
};

export default Alert;
