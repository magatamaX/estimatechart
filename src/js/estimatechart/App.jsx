import React from 'react';
import PropTypes from 'prop-types';

const App = ({ data }) => {
    document.getElementById('WorkBudgetFixed').addEventListener('change', e => {
        console.log('Innner Component => change', e.target.value);
    });
    console.log(data);
    return <p>{data}</p>;
};

App.propTypes = {
    data: PropTypes.string.isRequired
};

export default App;
