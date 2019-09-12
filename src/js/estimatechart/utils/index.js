import budgetRange from '../constants/budget_range';

// 関数計算
export const getScoreByRatio = (x) => {
// a(x)=5 (1-ℯ^((-x)/(20)))ln(x)- abs((1-ℯ^(-x))^(5)ln(x))
  const left = (5 * (1 - Math.pow(Math.E, ((-x) / (20)))) * Math.log(x));
  const right = Math.abs((Math.pow(1 - Math.pow(Math.E, -x), 5) * Math.log(x)));
  return left - right;
};

export const createPlotData = () => [
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

export const isBetween = (num, a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  return num >= min && num < max;
};

export const getChartRange = (min = 45000, max = 3000) => {
  // 推定単価(estimate_to)が属する単価幅が属する価格帯の上下一つの金額帯
  budgetRange.forEach((price, key, range) => {
    console.log(price, key, range);
    if (isBetween(max, price.min, price.max)) {
      const chartMin = range.get(key - 1) ? range.get(key - 1).min : 500;
      const chartMax = range.get(key + 1).max;
      console.log(`hey! ${chartMin} => ${chartMax}`);
    }
  });
};
