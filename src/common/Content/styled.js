import styled from "styled-components";

export const StyledContent = styled.div`
  max-width: 1000px;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.content.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 5px;
  }
`;

export const Title = styled.h3`
  font-size: 40px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 30px;
  }
`;

export const LayoutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;
