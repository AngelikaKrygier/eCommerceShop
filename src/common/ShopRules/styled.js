import styled from "styled-components";

export const Header = styled.h3`
  font-size: 30px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 30px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.content.background};
  margin: 0 auto;
  padding: 20px;
`;

export const Index = styled.p`
  justify-self: center;
`;

export const Paragraph = styled.p``;
