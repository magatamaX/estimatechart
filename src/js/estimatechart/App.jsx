import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import budgetRange from './constants/budget_range';

const data = [
  {
    name: 'Page A', value: 0, uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', value: 10, uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', value: 20, uv: -1000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', value: 30, uv: 500, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', value: 40, uv: -2000, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', value: 50, uv: -250, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', value: 60, uv: 3490, pv: 4300, amt: 2100,
  },
];

const gradientOffset = () => {
  const dataMax = Math.max(...data.map(i => i.uv));
  const dataMin = Math.min(...data.map(i => i.uv));
  //   const dataMax = 30;
  //   const dataMin = 20;

  if (dataMax <= 0) {
    return 0;
  }
  if (dataMin >= 0) {
    return 1;
  }

  return dataMax / (dataMax - dataMin);
};

const off = gradientOffset();

const App = ({ categoryId, privateId, workId }) => {
  console.log(categoryId, privateId, workId);

  const [value, setValue] = useState(1);
  console.log(budgetRange.get(value));

  document.getElementById('WorkBudgetFixed').addEventListener('change', (e) => {
    console.log('Innner Component => change', e.target.value);
    setValue(Number(e.target.value));
  });

  return (
    <div>
      <span>
        {`${budgetRange.get(value).from}円〜${budgetRange.get(value).to}円`}
      </span>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <Tooltip />
        <XAxis dataKey="value" />
        <YAxis dataKey="amt" />
        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="1" y2="0">
            <stop offset={0.3} stopColor="blue" stopOpacity={1} />
            <stop offset={0.3} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.6} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.6} stopColor="red" stopOpacity={1} />
            <stop offset={0.8} stopColor="red" stopOpacity={1} />
            <stop offset={0.8} stopColor="transparent" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    </div>
  );
};

App.propTypes = {
  categoryId: PropTypes.string.isRequired,
  privateId: PropTypes.string.isRequired,
  workId: PropTypes.string.isRequired
};

export default App;
