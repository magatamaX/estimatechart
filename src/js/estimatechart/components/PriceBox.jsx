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
  title, html, isEstimate
}) => (
  <Box isEstimate={isEstimate}>
    <dt>{title}</dt>
    <dd dangerouslySetInnerHTML={{ __html: html }} />
  </Box>
);

PriceBox.propTypes = {
  title: PropTypes.string.isRequired,
  html: PropTypes.string.isRequired,
  isEstimate: PropTypes.bool.isRequired
};

export default PriceBox;
