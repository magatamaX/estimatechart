import React, { useState } from 'react';
import PropTypes from 'prop-types';
import budgetRange from './constants/budget_range';
import { createPlotData, getChartRange } from './utils';
import Body from './components/Body';
import Main from './components/Main';
import Title from './components/Title';
import PriceArea from './components/PriceArea';
import GraphArea from './components/GraphArea';
import Message from './components/Message';
import Note from './components/Note';

// グラフデータプロット
const data = createPlotData();
const range = getChartRange();

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
  const [showMessage, setShowMessage] = useState(true);

  console.log(budgetRange.get(value));

  document.getElementById('WorkBudgetFixed').addEventListener('change', (e) => {
    console.log('Innner Component => change', e.target.value);
    setValue(Number(e.target.value));
  });

  return (
    <Body>
      <Title />
      <Main>
        <PriceArea min={budgetRange.get(value).min} max={budgetRange.get(value).max} />
        <GraphArea data={data} />
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
  isPrivate: PropTypes.string.isRequired,
  workId: PropTypes.string.isRequired
};

export default App;
