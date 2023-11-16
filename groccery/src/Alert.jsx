import { useEffect } from "react";
import PropTypes from "prop-types";

function Alert({ type, msg, removeAlert, list }) {
  // the useEffect hook will be invoked at at the initial render and the every time the list state value is changed

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);

  return <h2 className={`alert alert-${type}`}>{msg}</h2>;
}

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  removeAlert: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default Alert;
