import styled from 'styled-components';

import { FaLightbulb } from 'react-icons/fa';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors[theme.title]};
  height: 100vh;
  width: 100vw;
`;

export const Fab = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 1rem;
  right: 1rem;
`;

export const Light = styled(FaLightbulb).attrs({
  size: '1.5rem',
})`
  color: ${({ theme }) => theme.colors.secondary};
`;
