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
