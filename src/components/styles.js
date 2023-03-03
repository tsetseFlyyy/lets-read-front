import styled from 'styled-components';

export const ProgressLabeledStyled = styled.div`
  position: relative;

  > div[class^='label-'] {
    position: absolute;
    font-size: 12px;
  }

  .label-middle {
    left: 50%;
    transform: translateX(-50%);
  }

  .label-end {
    right: 0px;
  }
`;
