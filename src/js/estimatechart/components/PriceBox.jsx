import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.dl`
    && {
        margin-left: ${props => (!props.isEstimate ? '30px' : '0')};
        dt {
            font-size: 12px;
            font-weight: bold;
        }
        dd {
            color: ${props => (!props.isEstimate ? 'gray' : 'blue')};
            font-size: 18px;
            font-weight: bold;
            span {
                &.estimatechart__pricebox__unit {
                    font-size: 10px;
                    font-weight: normal;
                }
            }
        }
    }
`;

const PriceBox = ({
  min, max, title, isEstimate
}) => (
  <Box isEstimate={isEstimate}>
    <dt>{title}</dt>
    <dd>
      <span className="estimatechart__pricebox__price">{min.toLocaleString()}</span>
      <span className="estimatechart__pricebox__unit">円</span>
                〜
      <span className="estimatechart__pricebox__price">{max.toLocaleString()}</span>
      <span className="estimatechart__pricebox__unit">円</span>
    </dd>
  </Box>
);

PriceBox.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isEstimate: PropTypes.bool.isRequired
};

export default PriceBox;
