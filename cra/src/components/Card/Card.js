import React from "react";
import PropTypes from "prop-types";
import s from "./Card.module.scss";

const Card = ({ children, className, colSpan }) => (
  <div className={`${colSpan === 2 ? s.cardDouble : s.card} ${className}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  colSpan: PropTypes.number,
};

export default Card;
