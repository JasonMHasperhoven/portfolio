import React from "react";
import IconForward from "../../../../../../components/Icons/Forward";
import s from "./Square.css";

const Square = ({ title, href, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${className} ${s.square}`}
  >
    <div className={s.mask}>
      <div className={s.title}>{title}</div>
      <div className={s.action}>
        <IconForward attributes={{ className: s.icon }} />
      </div>
    </div>
  </a>
);

Square.propTypes = {
  title: React.PropTypes.string,
  href: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default Square;
