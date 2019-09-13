import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import budgetRangeMap from './constants/budget_range';
import { createPlotData, getChartRange } from './utils';
import Body from './components/Body';
import Main from './components/Main';
import Title from './components/Title';
import PriceArea from './components/PriceArea';
import PriceBox from './components/PriceBox';
import GraphArea from './components/GraphArea';
import Message from './components/Message';
import Note from './components/Note';


const selectDom = document.querySelector('.js-estimate-chart-select');
const inputDom = document.querySelector('.js-estimate-chart-input');

// ダミー推定金額
const dummyEstimateMin = 45000;
const dummyEstimateMax = 54000;

const App = ({
  isClient, categoryId, isPrivate, workId
}) => {
  console.log(`
    isClient: ${isClient}
    カテゴリID: ${categoryId}
    isPrivate: ${isPrivate}
    仕事ID: ${workId}`);

  const [value, setValue] = useState(1);
  const [estimateMin, setEstimateMin] = useState(0);
  const [estimateMax, setEstimateMax] = useState(0);

  const budgetMin = budgetRangeMap.get(value).min;
  const budgetMax = budgetRangeMap.get(value).max;
  const isLess = (estimateMin > budgetMax);

  console.log(`
    budgetMin: ${budgetMin}
    budgetMax: ${budgetMax}
    estimateMin: ${estimateMin}
    estimateMax: ${estimateMax}
    isLess: ${isLess}
    `);

  useEffect(() => {
    if (selectDom) {
      selectDom.addEventListener('change', (e) => {
        console.log('(select) Innner Component => change', e.target.value);
        setValue(Number(e.target.value));
      }, false);
    }

    if (inputDom) {
      inputDom.addEventListener('keyup', (e) => {
        console.log('(input) Innner Component => change', e.target.value);

        setValue(getChartRange(Number(e.target.value)));
      }, false);
    }
  }, []);

  useEffect(() => {
    console.log(`valueが変わりました。apiを呼びます。${value}`);
    setEstimateMin(dummyEstimateMin);
    setEstimateMax(dummyEstimateMax);
  }, [value]);

  return (
    <Body>
      <Title />
      <Main>
        <PriceArea>
          <PriceBox
            min={estimateMin}
            max={estimateMax}
            title="成約率の高い推定単価"
            isEstimate
          />
          <PriceBox
            min={budgetMin}
            max={budgetMax}
            title={isClient ? '設定予算' : '依頼予算'}
            isEstimate={false}
          />
        </PriceArea>
        <GraphArea
          isClient={isClient}
          data={createPlotData(isClient)}
          budgetMin={budgetMin}
          budgetMax={budgetMax}
          estimateMin={estimateMin}
          estimateMax={estimateMax}
          isLess={isLess}
        />
        { isLess && (
        <Message />
        )}
      </Main>
      <Note />
    </Body>
  );
};

App.propTypes = {
  isClient: PropTypes.bool.isRequired,
  categoryId: PropTypes.number.isRequired,
  isPrivate: PropTypes.bool.isRequired,
  workId: PropTypes.number.isRequired
};

export default App;
