import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Area = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;
`;

const PriceArea = ({ children }) => (
  <Area>
    {children}
  </Area>
);

PriceArea.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PriceArea;
