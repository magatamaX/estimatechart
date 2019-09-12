import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const CustomizedAxisTick = ({
  x, y, payload, min, max
}) => (
  <g transform={`translate(${x},${y})`}>
    <text
      x={0}
      y={0}
      dx={0}
      dy={16}
      textAnchor="middle"
      fill="#666"
    >
      {`${((min + max) * payload.value).toLocaleString()}円`}
    </text>
  </g>
);

CustomizedAxisTick.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  payload: PropTypes.any.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default CustomizedAxisTick;
