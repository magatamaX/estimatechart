import React from 'react';
import styled from 'styled-components';

const Box = styled.p`
    font-size: 12px;
    margin-top: 10px;
    color: #aaa;
    position: relative;
    padding-left: 1em;
    &::before {
        content: '※';
        position: absolute;
        left: 0;
    }
`;

const Note = () => (
  <Box>
    このグラフは、過去の依頼を元にAIが成約率の高い価格を推定したものです。
    <br />
    成約の保証をするものではありません。
  </Box>
);

export default Note;
