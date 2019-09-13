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

    .priceArea__estimate,
    .priceArea__selected {
        dt {
            font-size: 12px;
            font-weight: bold;
        }
        dd {
            font-size: 18px;
            font-weight: bold;
            span {
                &.priceArea__estimate__unit,
                &.priceArea__selected__unit {
                    font-size: 10px;
                    font-weight: normal;
                }
            }
        }
    }
    .priceArea__estimate {
        dd {
            color: blue;
        }
    }
    .priceArea__selected {
        margin-left: 30px;
        dd {
            color: gray;
        }
    }
`;

const PriceArea = ({
  budgetMin, budgetMax, estimateMin, estimateMax
}) => (
  <Box>
    <dl className="priceArea__estimate">
      <dt>成約率の高い推定単価</dt>
      <dd>
        <span className="priceArea__estimate__price">{estimateMin.toLocaleString()}</span>
        <span className="priceArea__estimate__unit">円</span>
            〜
        <span className="priceArea__estimate__price">{estimateMax.toLocaleString()}</span>
        <span className="priceArea__estimate__unit">円</span>
      </dd>
    </dl>
    <dl className="priceArea__selected">
      <dt>設定予算</dt>
      <dd>
        <span className="priceArea__selected__price">{budgetMin.toLocaleString()}</span>
        <span className="priceArea__selected__unit">円</span>
        〜
        <span className="priceArea__selected__price">{budgetMax.toLocaleString()}</span>
        <span className="priceArea__selected__unit">円</span>
      </dd>
    </dl>
  </Box>
);

PriceArea.propTypes = {
  budgetMin: PropTypes.number.isRequired,
  budgetMax: PropTypes.number.isRequired,
  estimateMin: PropTypes.number.isRequired,
  estimateMax: PropTypes.number.isRequired
};

export default PriceArea;
