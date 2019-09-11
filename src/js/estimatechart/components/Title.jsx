import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    font-size: 24px;
    font-weight: bold;
    span {
        font-weight: normal;
        color: #333;
        font-size: 14px;
    }
`;

const Title = () => (
  <Wrap>
        AI単価推定
    <span>(β版)</span>
  </Wrap>
);

export default Title;
