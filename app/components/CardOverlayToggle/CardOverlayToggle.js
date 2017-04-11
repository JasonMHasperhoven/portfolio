import React from 'react';
import IconForward from 'components/Icons/Forward';
import { overlayToggles } from 'components/Overlay';
import s from './CardOverlayToggle.css';

class CardOverlayToggle extends React.Component {
  componentDidMount() {
    overlayToggles.push(this.refs[this.props.id]);
  }

  render() {
    return (
      <a
        ref={this.props.id}
        className={s.cardOverlayMask}
        data-overlay-id={this.props.id}
      >
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

CardOverlayToggle.propTypes = {
  id: React.PropTypes.string.isRequired,
  className: React.PropTypes.string.isRequired
};

export default CardOverlayToggle;
