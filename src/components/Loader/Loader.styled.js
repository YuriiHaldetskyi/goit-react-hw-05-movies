import styled from '@emotion/styled';

export const Spinner = styled.div`
    width: 16px;
    height: 16px;
    position: absolute;
    left: -32px;
    border-radius: 50%;
    color: #2a2a2a;
    background: currentColor;
    box-shadow: 32px 0, -32px 0, 64px 0;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000000;
    ::after {
    content: '';
    position: absolute;
    left: -32px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background: #ff3d00;
    animation: move 3s linear infinite alternate;
  @keyframes move {
    0%,
    5% {
      left: -32px;
      width: 16px;
    }
    15%,
    20% {
      left: -32px;
      width: 48px;
    }
    30%,
    35% {
      left: 0px;
      width: 16px;
    }
    45%,
    50% {
      left: 0px;
      width: 48px;
    }
    60%,
    65% {
      left: 32px;
      width: 16px;
    }
    75%,
    80% {
      left: 32px;
      width: 48px;
    }
    95%,
    100% {
      left: 64px;
      width: 16px;
    }
  }
{
`;