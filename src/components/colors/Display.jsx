import React from 'react';
import PropTypes from 'prop-types';



const Display = ({ bgcolor, bgImage }) => (

<div style={{
    width: '634px',
    height: '634px',
    backgroundColor: bgcolor,
    backgroundImage: `url("${bgImage}")`
  }}></div>

);



export default Display;