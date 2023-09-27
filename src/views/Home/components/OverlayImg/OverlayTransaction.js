import React from "react";
import Overlay from "../../../../components/Overlay";
import IconPlayCircle from "../../../../components/Icons/PlayCircle";
import s from "./OverlayTransaction.module.scss";

const sleep = (period) => new Promise((resolve) => setTimeout(resolve, period));

function poll(promiseFn, period, timeout) {
  const cancelRef = {
    handler: null,
    isCancelled: false,
  };

  const cancellation = () =>
    new Promise((resolve) => {
      cancelRef.handler = () => {
        cancelRef.isCancelled = true;
        resolve();
      };
    });

  const poller = () =>
    Promise.race(
      [promiseFn(), cancellation(), timeout && sleep(timeout)].filter(Boolean)
    ).finally(async () => {
      if (!cancelRef.isCancelled) {
        await sleep(period);
        await poller();
      }
    });

  poller();

  return cancelRef.handler;
}

class OverlayTransaction extends React.Component {
  state = {
    imgSrc: null,
  };

  componentDidMount() {
    poll(async () => {
      if (window.__imgid) {
        this.setState({ imgSrc: window.__imgid });
        window.__imgid = null;
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.setState({ imgSrc: null });
  }

  render() {
    return (
      <Overlay id="img">
        <article>
          <section>
            <h2>Jason’ desixn</h2>
          </section>
        </article>
        {this.state.imgSrc && (
          <img
            alt="frame"
            src={this.state.imgSrc}
            style={{ width: 764, height: 573, borderRadius: 3 }}
          />
        )}
      </Overlay>
    );
  }
}

export default OverlayTransaction;
