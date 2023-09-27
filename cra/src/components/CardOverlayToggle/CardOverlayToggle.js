import React from "react";
import PropTypes from "prop-types";
import IconForward from "../Icons/Forward";
import { overlayToggles } from "../Overlay";
import s from "./CardOverlayToggle.module.scss";

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
        data-overlay-imgid={this.props.imgId}
      >
        {this.props.img || (
          <div
            className={`${s.cardOverlayMaskImage} ${this.props.className}`}
          />
        )}
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
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default CardOverlayToggle;
