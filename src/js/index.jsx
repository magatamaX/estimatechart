import React from 'react';
import ReactDOM from 'react-dom';
import App from './estimatechart/App';

const targetDom = document.querySelector('.js-estimate-chart');
const props = {
  categoryId: targetDom.dataset.categoryId,
  isPrivate: targetDom.dataset.isPrivate === '1',
  workId: targetDom.dataset.workId
};

ReactDOM.render(<App {...props} />, targetDom);
