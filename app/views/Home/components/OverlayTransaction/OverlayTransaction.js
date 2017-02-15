import React from 'react';
import Overlay from 'components/Overlay';
import IconPlay from 'components/Icons/Play';
import s from './OverlayTransaction.css';

class OverlayTransaction extends React.Component {
  constructor() {
    super();

    this.title = 'Simpl Transaction';

    this.state = {
      videoLoaded: false
    };

    this.content = (
      <div className={s.wrapper}>
        <p>
          At Simpl our bread and butter comes from our transaction application.<br />
          Here’s a prototype of our transaction flow.
        </p>
        <p>
          Click on the video below to see the demo!
        </p>
        <div ref="video" className={s.transaction} onClick={this.loadVideo.bind(this)}>
          <div className={s.transactionBg} />
          <div className={s.transactionSeeDemo}>
            <IconPlay attributes={{ className: s.transactionPlayIcon }} />
          </div>
        </div>
        <p>
          Most of our transactions happen through mobile devices. According to our
          analytics there’s still about 10% of users which are transacting on Android 4 devices.
        </p>
        <p>
          I tried to make the experience as interesting as possible, while still remaining smooth
          animations on low-end devices using only transform and opacity transitions.
        </p>
      </div>
    );
  }

  loadVideo() {
    if (this.state.videoLoaded) return;

    this.refs.video.classList.add(s.transactionActive);
    this.refs.video.innerHTML = `<video width="100%" autoplay loop controls>
      <source src="assets/transaction.mp4" type="video/mp4" />
    </video>`;

    this.setState({
      videoLoaded: true
    });
  }

  render() {
    return (
      <Overlay id="transaction" title={this.title} content={this.content} />
    );
  }
};

export default OverlayTransaction;
