import React from 'react';
import Overlay from 'components/Overlay';
import IconPlayCircle from 'components/Icons/PlayCircle';
import s from './OverlayTransaction.css';

class OverlayTransaction extends React.Component {
  constructor() {
    super();

    this.state = {
      videoLoaded: false
    };
  }

  loadVideo() {
    if (this.state.videoLoaded) return;

    this.refs.video.classList.add(s.transactionActive);

    this.setState({
      videoLoaded: true
    });
  }

  render() {
    return (
      <Overlay id="transaction">
        <h2>
          Simpl Transaction
        </h2>
        <p>
          At Simpl our bread and butter comes from our transaction application.<br />
          Most of our transactions happen through mobile devices. According to our
          analytics there’s still about 10% of users which are transacting on Android 4
          devices.
        </p>
        <p>
          I tried to make the experience as interesting as possible, while still remaining
          smooth animations on low-end devices using only transform and opacity transitions.
        </p>
        <p>
          Here’s a prototype of our transaction flow.<br />
          Click on the video below to see the demo!
        </p>
        <div ref="video" className={s.transaction} onClick={() => this.loadVideo()}>
          {this.state.videoLoaded ? (
            <video width="100%" autoPlay loop controls>
              <source src="./assets/static/transaction.mp4" type="video/mp4" />
            </video>
          ) : (
            <div>
              <div className={s.transactionBg} />
              <div className={s.transactionSeeDemo}>
                <IconPlayCircle attributes={{ className: s.transactionPlayCircleIcon }} />
              </div>
            </div>
          )}
        </div>
      </Overlay>
    );
  }
}

export default OverlayTransaction;
