import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, ReferenceLine, Tooltip
} from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick';

const GraphArea = ({
  data,
  budgetMin,
  budgetMax,
  estimateMin,
  estimateMax,
  isLess,
  isClient
}) => (
  <AreaChart
    width={470}
    height={150}
    data={data}
    margin={{
      top: 0, right: 0, left: 0, bottom: 0,
    }}
  >

    <XAxis
      tick={<CustomizedAxisTick min={estimateMin} max={estimateMax} />}
      domain={['dataMin', 'dataMax']}
      type="number"
      dataKey="ratio"
    />
    <Tooltip />

    <defs>
      {/* 設定単価 */}
      {isClient && (
        <linearGradient id="budget" x1="0" y1="0" x2="1" y2="0">
          <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor="transparent" stopOpacity={1} />
          <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : 'orange'} stopOpacity={0.5} />
          <stop offset={budgetMax / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : 'orange'} stopOpacity={1} />
          <stop offset={budgetMax / (estimateMin + estimateMax)} stopColor="transparent" stopOpacity={1} />
        </linearGradient>
      )}

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
    <Area type="monotone" dataKey="amt" stroke="#808080" fill="url(#budget)" />
    <Area type="monotone" dataKey="amt" stroke="transparent" fill="url(#estimate)" />
  </AreaChart>
);

GraphArea.propTypes = {
  data: PropTypes.array.isRequired,
  budgetMin: PropTypes.number.isRequired,
  budgetMax: PropTypes.number.isRequired,
  estimateMin: PropTypes.number.isRequired,
  estimateMax: PropTypes.number.isRequired,
  isLess: PropTypes.bool.isRequired,
  isClient: PropTypes.bool.isRequired
};

export default GraphArea;
