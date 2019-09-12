import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis
} from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick';

const GraphArea = ({
  data, budgetMin, budgetMax, estimateMin, estimateMax, isLess
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

    <defs>
      {/* 設定単価 */}
      <linearGradient id="budget" x1="0" y1="0" x2="1" y2="0">
        <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor="transparent" stopOpacity={1} />
        <stop offset={budgetMin / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : 'orange'} stopOpacity={0.5} />
        <stop offset={budgetMax / (estimateMin + estimateMax)} stopColor={isLess ? 'red' : 'orange'} stopOpacity={1} />
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
    <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#budget)" />
    <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#estimate)" />
  </AreaChart>
);

GraphArea.propTypes = {
  data: PropTypes.array.isRequired,
  budgetMin: PropTypes.number.isRequired,
  budgetMax: PropTypes.number.isRequired,
  estimateMin: PropTypes.number.isRequired,
  estimateMax: PropTypes.number.isRequired,
  isLess: PropTypes.bool.isRequired
};

export default GraphArea;
