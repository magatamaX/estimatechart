import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const GraphArea = ({
  data, budgetMin, budgetMax, estimateMin, estimateMax, range
}) => (
  <AreaChart
    width={470}
    height={150}
    data={data}
    margin={{
      top: 0, right: 0, left: 0, bottom: 0,
    }}
  >
    <Tooltip />
    <XAxis domain={['dataMin', 'dataMax']} type="number" dataKey="ratio" />

    <defs>
      <linearGradient id="budget" x1="0" y1="0" x2="1" y2="0">
        <stop offset={budgetMin / range} stopColor="transparent" stopOpacity={1} />
        <stop offset={budgetMin / range} stopColor="red" stopOpacity={0.5} />
        <stop offset={budgetMax / range} stopColor="red" stopOpacity={1} />
        <stop offset={budgetMax / range} stopColor="transparent" stopOpacity={1} />
      </linearGradient>
      <linearGradient id="estimate" x1="0" y1="0" x2="1" y2="0">
        <stop offset={estimateMin / range} stopColor="transparent" stopOpacity={1} />
        <stop offset={estimateMin / range} stopColor="blue" stopOpacity={0.5} />
        <stop offset={estimateMax / range} stopColor="blue" stopOpacity={1} />
        <stop offset={estimateMax / range} stopColor="transparent" stopOpacity={1} />
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
  range: PropTypes.number.isRequired
};

export default GraphArea;
