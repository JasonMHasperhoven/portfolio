import React from 'react';
import s from './Card.css';

const Card = ({ children, className, colSpan }) => (
  <div className={`${colSpan === 2 ? s.cardDouble : s.card} ${className ? className : ''}`}>
    {children}
  </div>
);

export default Card;
