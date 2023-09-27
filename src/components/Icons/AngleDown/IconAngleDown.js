import React from "react";
import PropTypes from "prop-types";

const IconAngleDown = ({ attributes }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="7"
    viewBox="0 0 11 7"
    {...attributes}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      d="M5.5 5.5l-4-4m4 4l4-4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

IconAngleDown.propTypes = {
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default IconAngleDown;
