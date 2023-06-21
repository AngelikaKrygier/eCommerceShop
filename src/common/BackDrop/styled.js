import styled, { css } from "styled-components";
import backDrop from "../../images/backDrop.png";
import backDropSecond from "../../images/BackDrop2.png";
import { ReactComponent as VectorPrevious } from "../../images/vectorPrevious.svg";
import { ReactComponent as VectorNext } from "../../images/vectorNext.svg";

export const StyledBackDrop = styled.div`
  background-image: url(${backDrop});
  background-position: center;
  background-repeat: no-repeat;
  aspect-ratio: 4/1;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: 0.8s;

  ${({ second }) =>
    second &&
    css`
      background-image: url(${backDropSecond});
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    display: none;
  }
`;

export const StyledVextorNext = styled(VectorNext)`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: end;
  cursor: pointer;
  padding-right: 20px;
`;

export const StyledVectorPrevious = styled(VectorPrevious)`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: start;
  cursor: pointer;
  padding-left: 20px;
`;
