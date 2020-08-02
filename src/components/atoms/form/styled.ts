import styled from 'styled-components';
import { tint, shade } from 'polished';

export const Wrapper = styled.form`
  margin-bottom: 1.25rem;
  padding: 1rem;
`;

export const Span = styled.span`
  color: ${({ theme }) => {
    const callback = theme.title === 'light' ? shade : tint;
    return callback(0.2, theme.colors.info);
  }};
  border-right: 0.25rem solid ${({ theme }) => theme.colors.secondary};
  border-left: 0.25rem solid ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: 0.2s ease-in-out;
  border-radius: 1rem;
  width: max-content;
  position: absolute;
  font-weight: 300;
  max-height: 100%;
  cursor: text;
  left: 0.25rem;
  top: 0;
`;

export const Text = styled.input`
  border: solid 1px
    ${({ theme }) => {
      const callback = theme.title === 'light' ? shade : tint;
      return callback(0.2, theme.colors.info);
    }};
  color: ${({ theme }) => theme.colors.text.default};
  background-color: transparent;
  transition: 0.2s ease-in-out;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-weight: 300;
  overflow: hidden;
  line-height: 1.5;
  font-size: 1rem;
  outline: none;
  width: 100%;

  &:focus,
  &:valid {
    & + ${Span} {
      font-size: x-small;
      top: -0.75rem;
    }
  }
`;

export const Label = styled.label`
  position: relative;
`;
