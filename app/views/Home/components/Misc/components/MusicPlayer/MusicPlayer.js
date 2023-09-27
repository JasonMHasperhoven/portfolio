import React from "react";
import IconPlay from "../../../../../../components/Icons/Play";
import IconPause from "../../../../../../components/Icons/Pause";
import IconDownload from "../../../../../../components/Icons/Download";
import s from "./MusicPlayer.css";

class MusicPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      active: false,
    };
  }

  playPause() {
    if (this.state.active) {
      this.refs.audio.pause();
      this.setState({
        active: false,
      });
    } else {
      this.refs.audio.play();
      this.setState({
        active: true,
      });
    }
  }

  render() {
    return (
      <div className={`${s.player} ${this.props.className}`}>
        <div className={s.mask} />
        <audio ref="audio" src={this.props.src}>
          Your browser does not support this
        </audio>
        <div className={s.title}>{this.props.title}</div>
        <div className={s.actions}>
          <a className={s.playPause} onClick={() => this.playPause()}>
            {this.state.active ? (
              <IconPause attributes={{ className: "" }} />
            ) : (
              <IconPlay attributes={{ className: "" }} />
            )}
          </a>
          <a className={s.download} href={this.props.src}>
            <IconDownload attributes={{ className: "" }} />
          </a>
        </div>
      </div>
    );
  }
}

MusicPlayer.propTypes = {
  title: React.PropTypes.string,
  src: React.PropTypes.string,
  className: React.PropTypes.string,
};

export default MusicPlayer;
