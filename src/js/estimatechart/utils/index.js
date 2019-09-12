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

export const getChartRange = (min = 45000, max = 54000) => {
  // 推定単価(estimate_to)が属する単価幅が属する価格帯の上下一つの金額帯
  const obj = [...budgetRangeMap.values()].reduce((acc, cur, idx, src) => {
    if (isBetween(max, cur.min, cur.max)) {
      acc.chartMin = src[idx - 1] ? src[idx - 1].min : 500;
      acc.chartMax = src[idx + 1] ? src[idx + 1].max : 10000000;
    }
    return acc;
  }, {
    chartMin: 500,
    chartMax: 10000000,
  });
  return obj;
};
