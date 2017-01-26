import React from 'react';
import s from './DropdownMenu.css';

class DropdownMenu extends React.Component {
  componentDidMount() {
    this.refs.dropdownToggle.addEventListener('mouseenter', () => this.show());
    this.refs.dropdownToggle.addEventListener('mouseleave', () => this.hide());
  }

  show() {
    this.refs.dropdownMenu.classList.add('is-open');
  }

  hide() {
    this.refs.dropdownMenu.classList.remove('is-open');
  }

  render() {
    return (
      <div ref="dropdownToggle" className={s.toggle}>
        {this.props.toggle}
        <svg className={s.angleDown} xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7">
          <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M5.5 5.5l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <div ref="dropdownMenu" className={s.dropdownMenu}>
          <div className={s.arrow} />
          <div className={s.wrapper}>
            {this.props.items.map(item => (
              <a key={item.value} href={item.href} className={s.item}>
                {item.value}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DropdownMenu;
