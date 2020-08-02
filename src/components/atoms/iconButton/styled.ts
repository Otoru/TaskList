import styled from 'styled-components';
import { tint, shade } from 'polished';

import { Theme } from 'components/styled';

const color = (theme: Theme) => {
  const callback = theme.title === 'light' ? tint : shade;
  return callback(0.2, theme.colors.danger);
};

export const Tooltip = styled.span`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.secondary};
  transform: translateY(3rem);
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  position: absolute;
  font-weight: 300;

  &::after {
    border-color: transparent transparent ${({ theme }) => theme.colors.danger}
      transparent;
    border-style: solid;
    position: absolute;
    margin-left: -5px;
    border-width: 3px;
    content: ' ';
    bottom: 100%;
    left: 50%;
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  display: flex;

  & > ${Tooltip} {
    transition: visibility 100ms linear, opacity 100ms linear;
    visibility: hidden;
    opacity: 0;
  }

  &:hover > ${Tooltip} {
    min-width: max-content;
    visibility: visible;
    z-index: 100;
    opacity: 1;
  }
`;

export const Btn = styled.button`
  background-color: ${({ theme }) => theme.colors.danger};
  box-shadow: ${({ theme }) => theme.shadow.basic};
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  padding: 0.75rem;
  display: flex;
  outline: none;
  border: none;

  &:hover {
    background-color: ${({ theme }) => color(theme)};
    box-shadow: ${({ theme }) => theme.shadow.hover};
    cursor: pointer;
  }

  &:active {
    transform: translateY(1px);
  }
`;
