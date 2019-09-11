import React from 'react';
import ReactDOM from 'react-dom';
import App from './estimatechart/App';

document.getElementById('WorkBudgetFixed').addEventListener('change', (e) => {
  console.log('change', e.target.value);
});

ReactDOM.render(<App />, document.querySelector('.js-estimate-chart'));
