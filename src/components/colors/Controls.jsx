import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ color, onChange }) => {
  return (
    <input type='color' name='bgcolor' value={color} onChange={onChange} />
  );
};

Controls.propTypes = {
  color: PropTypes.string.isRequired,
}

export default Controls;