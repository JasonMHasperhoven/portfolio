import React from 'react';
import s from './Dropdown.css';

const Dropdown = ({ items }) => (
  <div className={s.dropdown}>
    <span className={s.list} data-dropdown-items={items.length}>
      {items.map((item, i) => (
        <a key={item.value} className={i === 0 ? s.itemSelected : s.item} {...item.href && { href: item.href }}>
          {item.value}
        </a>
      ))}
      <span className={s.hamburger}>
        {items.map(item => (
          <span key={`${item.value}HamburgerLine`} className={s.hamburgerLine}></span>
        ))}
      </span>
    </span>
  </div>
);

export default Dropdown;
