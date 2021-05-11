import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ bgcolor, bgImage }) => (
  <div
    style={{
      width: '634px',
      height: '634px',
      backgroundColor: bgcolor,
      backgroundImage: `url("${bgImage}")`,
    }}
  ></div>
);

Display.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  bgImage: PropTypes.string.isRequired,
};

export default Display;
