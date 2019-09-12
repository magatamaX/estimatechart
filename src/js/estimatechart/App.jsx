import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import budgetRangeMap from './constants/budget_range';
import { createPlotData, getChartRange } from './utils';
import Body from './components/Body';
import Main from './components/Main';
import Title from './components/Title';
import PriceArea from './components/PriceArea';
import GraphArea from './components/GraphArea';
import Message from './components/Message';
import Note from './components/Note';

// ダミー推定金額
const dummyEstimateMin = 45000;
const dummyEstimateMax = 54000;

// グラフデータプロット
const plotData = createPlotData();


const App = ({ categoryId, isPrivate, workId }) => {
  const [value, setValue] = useState(1);
  const [estimateMin, setEstimateMin] = useState(0);
  const [estimateMax, setEstimateMax] = useState(0);
  const [showMessage, setShowMessage] = useState(true);

  const budgetMin = budgetRangeMap.get(value).min;
  const budgetMax = budgetRangeMap.get(value).max;
  const chartRange = getChartRange(estimateMin, estimateMax).amount;
  console.log(`
    budgetMin: ${budgetMin}
    budgetMax: ${budgetMax}
    estimateMin: ${estimateMin}
    estimateMax: ${estimateMax}
    chartRange: ${chartRange}
    `);

  document.getElementById('WorkBudgetFixed').addEventListener('change', (e) => {
    console.log('Innner Component => change', e.target.value);
    setValue(Number(e.target.value));
  }, {
    once: true
  });

  useEffect(() => {
    console.log(`valueが変わりました。apiを呼びます。${value}`);
    setEstimateMin(dummyEstimateMin);
    setEstimateMax(dummyEstimateMax);
  }, [value]);

  return (
    <Body>
      <Title />
      <Main>
        <PriceArea min={budgetRangeMap.get(value).min} max={budgetRangeMap.get(value).max} />
        <GraphArea
          data={plotData}
          budgetMin={budgetRangeMap.get(value).min}
          budgetMax={budgetRangeMap.get(value).max}
          estimateMin={estimateMin}
          estimateMax={estimateMax}
          chartRange={chartRange}
        />
        { showMessage && (
        <Message />
        )}
      </Main>
      <Note />
    </Body>
  );
};

App.propTypes = {
  categoryId: PropTypes.string.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  workId: PropTypes.string.isRequired
};

export default App;
