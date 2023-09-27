import { dispatch as d3Dispatch } from "d3-dispatch";

const dispatch = d3Dispatch("img");

const ref = {};

dispatch.on("img.overlay", (imgSrc) => {
  console.log("TCL: imgSrc", imgSrc);
  ref.current = imgSrc;
});

export default {
  dispatch,
  ref,
};
