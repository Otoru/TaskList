import { TiMediaStopOutline, TiInputCheckedOutline } from 'react-icons/ti';
import styled from 'styled-components';
import { tint, shade } from 'polished';

import { Theme } from 'components/styled';

interface Props {
  status: Boolean;
  theme: Theme;
}

export const Wrapper = styled.li`
  border-top: 1px solid ${({ theme }) => theme.colors.grey};
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  display: flex;
`;

export const CheckIcon = styled(TiMediaStopOutline)`
  color: ${({ theme }) => {
    const callback = theme.title === 'light' ? tint : shade;
    return callback(0.4, theme.colors.info);
  }};
  font-size: 2rem;
`;

export const UncheckIcon = styled(TiInputCheckedOutline)`
  font-size: 2rem;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.info};
  background-color: transparent;
  justify-content: center;
  margin-right: 0.75rem;
  align-items: center;
  display: flex;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const Text = styled.p`
  text-decoration: ${(props: Props) =>
    props.status ? 'line-through' : 'none'};

  color: ${(props: Props) => {
    const { theme, status } = props;
    const color = theme.colors.text.default;
    const callback = theme.title === 'light' ? tint : shade;
    return status ? callback(0.6, color) : color;
  }};
  margin-right: 1rem;
  font-weight: 300;
  flex: 1;
`;
