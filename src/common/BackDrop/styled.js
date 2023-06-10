import styled from "styled-components";
import backDrop from "../../images/backDrop.png";

export const StyledBackDrop = styled.div`
  background-image: url(${backDrop});
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 4/1;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;
