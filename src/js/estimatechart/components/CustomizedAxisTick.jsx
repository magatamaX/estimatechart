import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const CustomizedAxisTick = ({
  x, y, stroke, payload
}) => (
  <g transform={`translate(${x},${y})`}>
    <text x={8} y={0} dy={16} textAnchor="end" fill="#666">{payload.value}</text>
  </g>
);

CustomizedAxisTick.propTypes = {
  x: PropTypes.any.isRequired,
  y: PropTypes.any.isRequired,
  stroke: PropTypes.any.isRequired,
  payload: PropTypes.any.isRequired
};

export default CustomizedAxisTick;
