import React from 'react';
import s from './CardOverlayToggle.css';
import IconForward from 'components/Icons/Forward';

import { overlayToggles } from 'components/Overlay';

class CardOverlayToggle extends React.Component {
  componentDidMount() {
    overlayToggles.push(this.refs[this.props.id]);
  }

  render() {
    return (
      <a ref={this.props.id}
        className={s.cardOverlayMask}
        data-overlay-id={this.props.id}>
        <div className={`${s.cardOverlayMaskImage} ${this.props.className}`} />
        <div className={s.cardOverlayMaskMask}>
          <div className={s.cardOverlayMaskAction}>
            <IconForward attributes={{ className: s.cardOverlayMaskIcon }} />
          </div>
        </div>
      </a>
    );
  }
}

export default CardOverlayToggle;
