import budgetRangeMap from '../constants/budget_range';

// 関数計算
export const getScoreByRatio = (x) => {
// a(x)=5 (1-ℯ^((-x)/(20)))ln(x)- abs((1-ℯ^(-x))^(5)ln(x))
  const left = (5 * (1 - Math.pow(Math.E, ((-x) / (20)))) * Math.log(x));
  const right = Math.abs((Math.pow(1 - Math.pow(Math.E, -x), 5) * Math.log(x)));
  return left - right;
};


export const createPlotData = () => [
  {
    ratio: 0, value: 'data1', amt: 15,
  }, {
    ratio: 0.2, value: 'data2', amt: 20
  }, {
    ratio: 0.4, value: 'data3', amt: 40
  }, {
    ratio: 0.6, value: 'data4', amt: 80
  }, {
    ratio: 0.8, value: 'data5', amt: 97
  }, {
    ratio: 1, value: 'data6', amt: 100
  }
];

export const isBetween = (num, a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return num >= min && num < max;
};

export const getChartRange = (price) => {
  // 推定単価(estimate_to)が属する単価幅が属する金額帯
  const rangeIndex = [...budgetRangeMap.entries()].reduce((acc, cur, idx, src) => {
    const [key, value] = cur;
    if (isBetween(price, value.min, value.max)) {
      console.log(`入力した金額はインデックス${key}に存在します。`);
      return key;
    }
    console.log(`入力した金額はインデックス${key}には存在しません。`);
    return acc;
  }, 1);
  return rangeIndex;
};
