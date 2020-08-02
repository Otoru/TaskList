import { GoPlus } from 'react-icons/go';
import styled from 'styled-components';

export const Plus = styled(GoPlus).attrs({
  size: '.75rem',
})`
  color: ${({ theme }) => theme.colors.secondary};
`;
