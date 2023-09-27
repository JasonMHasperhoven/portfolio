import React from "react";
import PropTypes from "prop-types";

const IconPlay = ({ attributes }) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...attributes}
  >
    <path
      d="M11.5848214,6.75793404 L0.46875,12.9353894 C0.340401144,13.0079344 0.230190193,13.0163049 0.138113839,12.960501 C0.046037486,12.9046972 0,12.8042517 0,12.6591617 L0,0.337733152 C0,0.192643141 0.046037486,0.0921977165 0.138113839,0.0363938661 C0.230190193,-0.0194099844 0.340401144,-0.0110395324 0.46875,0.0615054732 L11.5848214,6.23896083 C11.7131703,6.31150584 11.7773438,6.39800051 11.7773438,6.49844744 C11.7773438,6.59889437 11.7131703,6.68538904 11.5848214,6.75793404 L11.5848214,6.75793404 Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

IconPlay.propTypes = {
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default IconPlay;
