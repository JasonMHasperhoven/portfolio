import React, { useEffect, useRef } from "react";
import { windowScroll } from "../../../../../../helpers/globalEvents";
import s from "./Selfie.module.scss";

function Selfie() {
  const frame1 = useRef();
  const frame2 = useRef();
  const frame3 = useRef();
  const frame4 = useRef();

  useEffect(() => {
    if (frame1.current) {
      frame1.current.classList.add("is-visible");

      windowScroll.push(() => {
        const frameMiddle =
          frame1.current?.getBoundingClientRect().top +
          (frame1.current?.getBoundingClientRect().bottom -
            frame1.current?.getBoundingClientRect().top) /
            2;

        if (window.innerHeight * 0.6 > frameMiddle) {
          frame2.current.classList.add("is-visible");
        } else {
          frame2.current.classList.remove("is-visible");
        }

        if (window.innerHeight * 0.5 > frameMiddle) {
          frame3.current.classList.add("is-visible");
        } else {
          frame3.current.classList.remove("is-visible");
        }

        if (window.innerHeight * 0.4 > frameMiddle) {
          frame4.current.classList.add("is-visible");
        } else {
          frame4.current.classList.remove("is-visible");
        }
      });
    }
  }, [frame1.current]);

  return (
    <div className={s.selfie}>
      <div ref={frame1} className={s.selfie1} />
      <div ref={frame2} className={s.selfie2} />
      <div ref={frame3} className={s.selfie3} />
      <div ref={frame4} className={s.selfie4} />
    </div>
  );
}

export default Selfie;
