import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
    padding: 25px 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Main = ({ children }) => (
  <Wrap>{children}</Wrap>
);

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Main;
