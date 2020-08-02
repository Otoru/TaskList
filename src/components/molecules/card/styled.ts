import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: ${({ theme }) => theme.shadow.basic};
  border-radius: 0.25rem;
  width: max-content;
  max-width: 35vw;

  @media only screen and (max-width: 768px) {
    & {
      width: max-content;
      max-width: 80vw;
    }
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.info};
  padding: 1rem 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.default};
  font-weight: lighter;
  padding: 0.5rem 0rem;
  text-align: center;
`;

export const Content = styled.div``;

export const Action = styled.div`
  transform: translateY(50%);
  justify-content: center;
  margin-top: calc(-10%);
  display: flex;
`;

export const Footer = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.info};
`;
