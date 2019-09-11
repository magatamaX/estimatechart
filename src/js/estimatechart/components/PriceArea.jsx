import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 20px;

    .estimate,
    .selected {
        dt {
            font-size: 14px;
            font-weight: bold;
        }
        dd {
            font-size: 20px;
            font-weight: bold;
            span {
                &.unit {
                    font-size: 14px;
                    font-weight: normal;
                }
            }
        }
    }
    .estimate {
        dd {
            color: blue;
        }
    }
    .selected {
        margin-left: 30px;
        dd {
            color: gray;
        }
    }
`;

const PriceArea = () => (
  <Box>
    <dl className="estimate">
      <dt>成約率の高い推定単価</dt>
      <dd>
        <span className="price">45,000</span>
        <span className="unit">円</span>
            〜
        <span className="price">54,000</span>
        <span className="unit">円</span>
      </dd>
    </dl>
    <dl className="selected">
      <dt>設定予算</dt>
      <dd>
        <span className="price">50,000</span>
        <span className="unit">円</span>
        〜
        <span className="price">100,000</span>
        <span className="unit">円</span>
      </dd>
    </dl>
  </Box>
);

PriceArea.propTypes = {

};

export default PriceArea;
