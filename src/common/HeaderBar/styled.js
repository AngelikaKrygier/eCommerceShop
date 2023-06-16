import styled from "styled-components";
import { ReactComponent as ProfileIcon } from "../../images/profile.svg";

export const StyledHeaderBar = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto 1fr;
  align-items: center;
  gap: 40px;
  padding: 20px calc(10%);
  box-shadow: ${({ theme }) => theme.boxShadow};
  background-color: ${({ theme }) => theme.colors.headerBar.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: repeat(auto);
    gap: 15px;
    padding: 15px;
  }
`;

export const Header = styled.h1`
  margin: 0;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    font-size: 25px;
    grid-column: span 2;
  }
`;

export const Profile = styled(ProfileIcon)`
  width: 40px;
  height: 40px;
  justify-self: center;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.profile.background};
  border: 1px solid black;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}) {
    justify-self: end;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 40px;
    height: 40px;
  }
`;
