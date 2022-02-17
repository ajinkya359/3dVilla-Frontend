import React from "react";
import PropTypes from "prop-types";

const Message = ({ msg ,messageClose}) => {
  return (
    <div className="alert alert-info fade show" role="alert">
      {msg}
      <button
        type="button"
        className="close"
        // data-dismiss="alert"
        // aria-label="Close"
        onClick={messageClose}
      >
        <span aria-hidden="true">x</span>
      </button>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default Message;
