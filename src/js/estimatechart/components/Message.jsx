import React from 'react';
import styled from 'styled-components';

const Box = styled.p`
    font-size: 12px;
    margin-top: 10px;
    padding: 10px 10px 10px 20px;
    background-color: pink;
    position: relative;
    &::before {
        content: '※';
        position: absolute;
        left: 10px;
    }
    span {
        font-weight: bold;
    }
`;

const Message = () => (
  <Box>
    <span>推定単価未満</span>
    の予算が選択されています。
    <br />
    より良い提案を集めるためには「2万円〜5万円」以上の予算を設定してください。
  </Box>
);

export default Message;
