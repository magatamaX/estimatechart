import React from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const GraphArea = ({ data }) => (
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
        <stop offset={0.1} stopColor="transparent" stopOpacity={1} />
        <stop offset={0.1} stopColor="red" stopOpacity={0.5} />
        <stop offset={0.3} stopColor="red" stopOpacity={1} />
        <stop offset={0.3} stopColor="transparent" stopOpacity={1} />
      </linearGradient>
      <linearGradient id="estimate" x1="0" y1="0" x2="1" y2="0">
        <stop offset={0.4} stopColor="transparent" stopOpacity={1} />
        <stop offset={0.4} stopColor="blue" stopOpacity={0.5} />
        <stop offset={0.6} stopColor="blue" stopOpacity={1} />
        <stop offset={0.6} stopColor="transparent" stopOpacity={1} />
      </linearGradient>
    </defs>
    <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#budget)" />
    <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#estimate)" />
  </AreaChart>
);

GraphArea.propTypes = {
  data: PropTypes.array.isRequired
};

export default GraphArea;
