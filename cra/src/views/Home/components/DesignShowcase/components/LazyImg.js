import React, { useRef, useState, useEffect } from "react";

function useIntersection(ref, callback, options) {
  useEffect(() => {
    let observer;

    if (ref.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (options?.isIntersectingCallback) {
              callback(entry.isIntersecting);
            } else if (entry.isIntersecting) {
              callback();
            }
          });
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0,
          ...options,
        }
      );

      observer.observe(ref.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
        observer = null;
      }
    };
  }, [ref.current, callback, options]);
}

export default function LazyImg({
  src,
  alt,
  radius,
  objectFit = "cover",
  objectPosition = "center",
  width,
  height,
  ...props
}) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useIntersection(ref, () => setVisible(true));

  return (
    <div
      ref={ref}
      style={{
        position: "relative",
        borderRadius: radius,
        width,
        height,
        background: "white",
      }}
      {...props}
    >
      {visible && (
        <img
          alt="frame"
          src={src}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: loaded ? 1 : 0,
            transition: "opacity 1s",
            borderRadius: radius,
            objectFit,
            objectPosition,
          }}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
