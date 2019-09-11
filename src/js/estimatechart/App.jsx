import React, { useState } from 'react';
import PropTypes from 'prop-types';
import budgetRange from './constants/budget_range';

const App = ({ data }) => {
  console.log(data);

  const [value, setValue] = useState(1);
  console.log(budgetRange.get(value));

  document.getElementById('WorkBudgetFixed').addEventListener('change', (e) => {
    console.log('Innner Component => change', e.target.value);
    setValue(Number(e.target.value));
  });

  return (
    <div>
      <span>
        {`${budgetRange.get(value).from}円〜${budgetRange.get(value).to}円`}
      </span>
    </div>
  );
};

App.propTypes = {
  data: PropTypes.string.isRequired,
};

export default App;
