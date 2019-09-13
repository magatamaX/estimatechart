import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrap = styled.div`
    margin-top: 40px;
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
`;

const Body = ({ children }) => (
  <Wrap>{children}</Wrap>
);

Body.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Body;
