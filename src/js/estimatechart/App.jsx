import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import budgetRange from './constants/budget_range';

// 関数計算
const getScoreByRatio = (x) => {
// a(x)=5 (1-ℯ^((-x)/(20)))ln(x)- abs((1-ℯ^(-x))^(5)ln(x))
  const left = (5 * (1 - Math.pow(Math.E, ((-x) / (20)))) * Math.log(x));
  const right = Math.abs((Math.pow(1 - Math.pow(Math.E, -x), 5) * Math.log(x)));
  return left - right;
};
console.log(getScoreByRatio(10));

// グラフデータプロット
const data = [
  {
    ratio: null, value: 0, uv: 4000, pv: 2400, amt: null,
  }, {
    ratio: 10, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(10),
  }, {
    ratio: 20, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(20),
  }, {
    ratio: 30, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(30),
  }, {
    ratio: 40, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(40),
  }, {
    ratio: 50, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(50),
  }, {
    ratio: 60, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(60),
  }, {
    ratio: 70, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(70),
  }, {
    ratio: 80, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(80),
  }, {
    ratio: 90, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(90),
  }, {
    ratio: 100, value: 0, uv: 4000, pv: 2400, amt: getScoreByRatio(100),
  }
];

// グラデーションオフセット計算
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

const App = ({ categoryId, isPrivate, workId }) => {
  console.log(categoryId, isPrivate, workId);

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
        width={800}
        height={200}
        data={data}
        margin={{
          top: 30, right: 30, left: 30, bottom: 30,
        }}
      >
        <Tooltip />
        <XAxis domain={['dataMin', 'dataMax']} type="number" dataKey="ratio" />

        <defs>
          <linearGradient id="splitColor" x1="0" y1="0" x2="1" y2="0">
            <stop offset={0.1} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.1} stopColor="red" stopOpacity={1} />
            <stop offset={0.3} stopColor="red" stopOpacity={1} />
            <stop offset={0.3} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.4} stopColor="transparent" stopOpacity={1} />
            <stop offset={0.4} stopColor="blue" stopOpacity={1} />
            <stop offset={0.6} stopColor="blue" stopOpacity={1} />
            <stop offset={0.6} stopColor="transparent" stopOpacity={1} />
          </linearGradient>
        </defs>
        <Area type="monotone" dataKey="amt" stroke="#000" fill="url(#splitColor)" />
      </AreaChart>
    </div>
  );
};

App.propTypes = {
  categoryId: PropTypes.string.isRequired,
  isPrivate: PropTypes.string.isRequired,
  workId: PropTypes.string.isRequired
};

export default App;
