import styled from "styled-components";

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
