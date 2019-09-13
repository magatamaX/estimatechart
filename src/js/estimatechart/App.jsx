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
const inputDom = document.querySelector('input.js-estimate-chart-input');

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

  const [selectValue, setSelectValue] = useState(1);
  const [inputValue, setInputValue] = useState(0);
  const [estimateMin, setEstimateMin] = useState(0);
  const [estimateMax, setEstimateMax] = useState(0);

  console.log(`selectValue: ${selectValue}, inputValue: ${inputValue}`);

  //   const budgetMin = budgetRangeMap.get(selectValue).min;
  //   const budgetMax = budgetRangeMap.get(selectValue).max;
  const {
    min: budgetMin,
    max: budgetMax,
    label: budgetLabel,
    html: budgetHtml
  } = budgetRangeMap.get(selectValue);
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
        setSelectValue(Number(e.target.value));
      }, false);
    }

    if (inputDom) {
      setSelectValue(4);

      // inputタグはオリジナルのものであり、change()で強制発火しているためonchangeを使用
      inputDom.onchange = (e) => {
        console.log('rapgjerihgaj!!!!!', e.target.value);

        console.log('js-estimate-chart-inputが変わりました！');
        console.log('(input) Innner Component => change', e.target.value);
        console.log(`スパンの値はどうなっているか？${document.querySelector('.amount_exclude_tax').innerHTML}`);

        setInputValue(Number(e.target.value));
      };
    }
  }, []);

  useEffect(() => {
    console.log(`selectValueが変わりました。apiを呼びます。${selectValue}`);
    setEstimateMin(dummyEstimateMin);
    setEstimateMax(dummyEstimateMax);
  }, [selectValue]);

  return (
    <Body>
      <Title />
      <Main>
        <PriceArea>
          <PriceBox
            html={`${estimateMin.toLocaleString()}<small>円</small> 〜 ${estimateMax.toLocaleString()}<small>円</small>`}
            title="成約率の高い推定単価"
            isEstimate
          />
          <PriceBox
            title={isClient ? '設定予算' : '依頼予算'}
            html={budgetHtml}
            isEstimate={false}
          />
        </PriceArea>
        <GraphArea
          isClient={isClient}
          inputValue={inputValue}
          data={createPlotData(isClient)}
          budgetMin={budgetMin}
          budgetMax={budgetMax}
          estimateMin={estimateMin}
          estimateMax={estimateMax}
          isLess={isLess}
        />
        { isLess && (
        <Message label={budgetLabel} />
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
