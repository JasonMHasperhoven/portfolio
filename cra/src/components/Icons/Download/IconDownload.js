import React from "react";
import PropTypes from "prop-types";

const IconDownload = ({ attributes }) => (
  <svg
    width="15"
    height="14"
    viewBox="0 0 15 14"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    {...attributes}
  >
    <path
      d="M11.4285714,12 C11.4285714,11.8452373 11.3720244,11.7113101 11.2589286,11.5982143 C11.1458328,11.4851185 11.0119055,11.4285714 10.8571429,11.4285714 C10.7023802,11.4285714 10.5684529,11.4851185 10.4553571,11.5982143 C10.3422613,11.7113101 10.2857143,11.8452373 10.2857143,12 C10.2857143,12.1547627 10.3422613,12.2886899 10.4553571,12.4017857 C10.5684529,12.5148815 10.7023802,12.5714286 10.8571429,12.5714286 C11.0119055,12.5714286 11.1458328,12.5148815 11.2589286,12.4017857 C11.3720244,12.2886899 11.4285714,12.1547627 11.4285714,12 L11.4285714,12 Z M13.7142857,12 C13.7142857,11.8452373 13.6577387,11.7113101 13.5446429,11.5982143 C13.4315471,11.4851185 13.2976198,11.4285714 13.1428571,11.4285714 C12.9880945,11.4285714 12.8541672,11.4851185 12.7410714,11.5982143 C12.6279756,11.7113101 12.5714286,11.8452373 12.5714286,12 C12.5714286,12.1547627 12.6279756,12.2886899 12.7410714,12.4017857 C12.8541672,12.5148815 12.9880945,12.5714286 13.1428571,12.5714286 C13.2976198,12.5714286 13.4315471,12.5148815 13.5446429,12.4017857 C13.6577387,12.2886899 13.7142857,12.1547627 13.7142857,12 L13.7142857,12 Z M14.8571429,10 L14.8571429,12.8571429 C14.8571429,13.0952393 14.7738104,13.2976182 14.6071429,13.4642857 C14.4404754,13.6309532 14.2380964,13.7142857 14,13.7142857 L0.857142857,13.7142857 C0.619046429,13.7142857 0.4166675,13.6309532 0.25,13.4642857 C0.0833325,13.2976182 0,13.0952393 0,12.8571429 L0,10 C0,9.76190357 0.0833325,9.55952464 0.25,9.39285714 C0.4166675,9.22618964 0.619046429,9.14285714 0.857142857,9.14285714 L5.00892857,9.14285714 L6.21428571,10.3571429 C6.55952554,10.6904779 6.96428339,10.8571429 7.42857143,10.8571429 C7.89285946,10.8571429 8.29761732,10.6904779 8.64285714,10.3571429 L9.85714286,9.14285714 L14,9.14285714 C14.2380964,9.14285714 14.4404754,9.22618964 14.6071429,9.39285714 C14.7738104,9.55952464 14.8571429,9.76190357 14.8571429,10 L14.8571429,10 Z M11.9553571,4.91964286 C12.0565481,5.1636917 12.0148819,5.37202295 11.8303571,5.54464286 L7.83035714,9.54464286 C7.72321375,9.65773866 7.58928652,9.71428571 7.42857143,9.71428571 C7.26785634,9.71428571 7.13392911,9.65773866 7.02678571,9.54464286 L3.02678571,5.54464286 C2.84226098,5.37202295 2.80059473,5.1636917 2.90178571,4.91964286 C3.0029767,4.68749884 3.17857018,4.57142857 3.42857143,4.57142857 L5.71428571,4.57142857 L5.71428571,0.571428571 C5.71428571,0.416665893 5.77083277,0.282738661 5.88392857,0.169642857 C5.99702437,0.0565470536 6.13095161,0 6.28571429,0 L8.57142857,0 C8.72619125,0 8.86011848,0.0565470536 8.97321429,0.169642857 C9.08631009,0.282738661 9.14285714,0.416665893 9.14285714,0.571428571 L9.14285714,4.57142857 L11.4285714,4.57142857 C11.6785727,4.57142857 11.8541662,4.68749884 11.9553571,4.91964286 L11.9553571,4.91964286 Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);

IconDownload.propTypes = {
  attributes: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
};

export default IconDownload;