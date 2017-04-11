import React from 'react';

const IconFacebook = ({ attributes }) => (
  <svg width="10" height="20" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg" {...attributes}>
    <path fillRule="evenodd" d="M9.98883929,0.991071429 L9.98883929,3.9375 L8.23660714,3.9375 C7.59672299,3.9375 7.16517969,4.07142723 6.94196429,4.33928571 C6.71874888,4.6071442 6.60714286,5.00892589 6.60714286,5.54464286 L6.60714286,7.65401786 L9.87723214,7.65401786 L9.44196429,10.9575893 L6.60714286,10.9575893 L6.60714286,19.4285714 L3.19196429,19.4285714 L3.19196429,10.9575893 L0.345982143,10.9575893 L0.345982143,7.65401786 L3.19196429,7.65401786 L3.19196429,5.22098214 C3.19196429,3.83704665 3.57886518,2.76376869 4.35267857,2.00111607 C5.12649196,1.23846345 6.15698761,0.857142857 7.44419643,0.857142857 C8.5379519,0.857142857 9.3861577,0.901785268 9.98883929,0.991071429 L9.98883929,0.991071429 Z" fill="currentColor" />
  </svg>
);

IconFacebook.propTypes = {
  attributes: React.PropTypes.objectOf(React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]))
};

export default IconFacebook;
