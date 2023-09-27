import React from "react";
import PropTypes from "prop-types";

const IconPlayCircle = ({ attributes }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    {...attributes}
  >
    <path
      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24zm-4.584-33.978v19.956L32.36 22.955l-12.944-8.933z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

IconPlayCircle.propTypes = {
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default IconPlayCircle;
