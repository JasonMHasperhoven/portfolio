import React from 'react';
import s from './Card.css';

const Card = ({ children, className, colSpan }) => (
  <div className={`${colSpan === 2 ? s.cardDouble : s.card} ${className ? className : ''}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  colSpan: React.PropTypes.number
};

export default Card;
