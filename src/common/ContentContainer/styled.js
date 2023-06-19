import styled from "styled-components";

export const ContentContainer = styled.div`
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
