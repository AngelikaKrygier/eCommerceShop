import styled from "styled-components";

export const StateLoadingWrapper = styled.div`
  margin: 40px auto;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  grid-gap: 20px;
`;

export const Spinner = styled.div`
  width: 91px;
  height: 91px;
  border-radius: 50%;
  justify-self: center;
  border: 11px solid ${({ theme }) => theme.colors.spinner.border};
  animation: spin 1.2s linear infinite;
  border-right-color: ${({ theme }) => theme.colors.spinner.borderRight};

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    height: 70px;
    width: 70px;
    border-width: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    height: 35px;
    width: 35px;
    border-width: 4px;
  }
`;

export const Paragraph = styled.p`
  padding: 0;
  align-self: flex-start;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 12px;
  }
`;
