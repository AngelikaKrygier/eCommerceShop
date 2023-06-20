import styled from "styled-components";

export const Title = styled.h3`
  font-size: 30px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 30px;
  }
`;

export const LayoutContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.content.background};
  margin: 0 auto;
  padding: 20px;
`;

export const StyledFetchSuccess = styled.div`
  max-width: 1300px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 15px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    padding: 5px;
  }
`;
