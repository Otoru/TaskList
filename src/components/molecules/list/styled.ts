import styled from 'styled-components';

export const Ul = styled.ul`
  list-style-type: none;
  overflow-y: scroll;
  max-height: 35vh;

  @media only screen and (max-width: 768px) {
    & {
      max-height: 55vh;
    }
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.15rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.info};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    border-radius: 0.25rem;
  }
`;
