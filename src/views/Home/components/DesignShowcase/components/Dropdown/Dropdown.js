import React from "react";
import PropTypes from "prop-types";
import s from "./Dropdown.module.scss";

const Dropdown = ({ items }) => (
  <div className={s.dropdown}>
    <span className={s.list} data-dropdown-items={items.length}>
      {items.map((item, i) => (
        <a
          key={item.value}
          className={i === 0 ? s.itemSelected : s.item}
          {...(item.href && { href: item.href })}
        >
          {item.value}
        </a>
      ))}
      <span className={s.hamburger}>
        {items.map((item) => (
          <span
            key={`${item.value}HamburgerLine`}
            className={s.hamburgerLine}
          />
        ))}
      </span>
    </span>
  </div>
);

Dropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default Dropdown;
