import React, { useState, useEffect, useRef } from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, ReferenceLine, Tooltip, ReferenceDot
} from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick';

const strokeColor = '#808080';
const highlightColor = '#FF9101';
const pathClassName = `path.recharts-curve.recharts-area-curve[stroke="${strokeColor}"]`;
const xAxisHeight = 30;
const chartWidth = 470;
const chartHeight = 150;
const chartMargin = {
  top: 0, right: 0, left: 0, bottom: 0,
};

const GraphArea = ({
  data,
  budgetMin,
  budgetMax,
  estimateMin,
  estimateMax,
  isLess,
  isClient,
  inputValue
}) => {
  const stopColor = isClient ? 'orange' : 'gray';

  const chartRef = useRef(null);
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });


  useEffect(() => {
    // 沿わせるパスの図形
    const targetPathElement = chartRef.current.querySelector(pathClassName);

    // 沿わせるパスエリアの長さ
    const totalLength = targetPathElement.getTotalLength();
    const length = totalLength * (inputValue / (estimateMin + estimateMax)) || 0;

    // Circleの位置算出
    const position = targetPathElement.getPointAtLength(length);
    setCirclePosition({ x: position.x, y: position.y });
  }, [inputValue]);

  return (
    <div ref={chartRef}>
      <AreaChart
        width={chartWidth}
        height={chartHeight}
        data={data}
        margin={chartMargin}
      >

        <XAxis
          tick={<CustomizedAxisTick min={estimateMin} max={estimateMax} />}
          type="number"
          dataKey="ratio"
          tickCount={5}
        />
        <defs>
          {/* 設定単価 */}
          <linearGradient id="budget" x1="0" y1="0" x2="1" y2="0">
            <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor="transparent" stopOpacity={1} />
            <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : stopColor} stopOpacity={0.5} />
            <stop offset={budgetMax / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : stopColor} stopOpacity={1} />
            <stop offset={budgetMax / (estimateMin + estimateMax)} stopColor="transparent" stopOpacity={1} />
          </linearGradient>
          {/* 推定単価 */}
          <linearGradient id="estimate" x1="0" y1="0" x2="1" y2="0">
            <stop offset={0.45} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.45} stopColor="blue" stopOpacity={0.5} />
            <stop offset={0.55} stopColor="blue" stopOpacity={1} />
            <stop offset={0.55} stopColor="transparent" stopOpacity={1} />
          </linearGradient>
        </defs>
        <g transform={`translate(${470 * 0.5},${150 * 0.1})`}>
          <text
            x={0}
            y={0}
            dx={0}
            dy={0}
            textAnchor="middle"
            fill="blue"
          >
          推定単価
          </text>
        </g>
        <Area id="axis0" type="monotone" dataKey="amt" stroke={strokeColor} fill="url(#budget)" />
        <Area id="axis1" type="monotone" dataKey="amt" stroke="transparent" fill="url(#estimate)" />
        { circlePosition.x !== 0 && (
          <line
            x1={circlePosition.x}
            x2={circlePosition.x}
            y1={chartHeight - xAxisHeight}
            y2={circlePosition.y}
            stroke={highlightColor}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="1, 5"
          />
        )}
        { circlePosition.x !== 0 && (
          <circle
            cx={0}
            cy={0}
            r={10}
            stroke="#fff"
            strokeWidth="2"
            fill={highlightColor}
            transform={`translate(${circlePosition.x},${circlePosition.y})`}
          />
        )}

      </AreaChart>
    </div>
  );
};
GraphArea.propTypes = {
  data: PropTypes.array.isRequired,
  budgetMin: PropTypes.number.isRequired,
  budgetMax: PropTypes.number.isRequired,
  estimateMin: PropTypes.number.isRequired,
  estimateMax: PropTypes.number.isRequired,
  isLess: PropTypes.bool.isRequired,
  isClient: PropTypes.bool.isRequired,
  inputValue: PropTypes.number.isRequired
};

export default GraphArea;
