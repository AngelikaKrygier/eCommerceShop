import { Contact } from "../Contact";
import { SearchBar } from "./SearchBar";
import { Header, Profile, StyledHeaderBar, StyledNavLink } from "./styled";
import { toLogin, toMainPage } from "../../root/routes";

export const HeaderBar = () => {
  return (
    <StyledHeaderBar>
      <StyledNavLink to={toMainPage}>
       <Header>CLOTHING STORE</Header>
      </StyledNavLink>
      <SearchBar />
      <Contact />
      <StyledNavLink to={toLogin}>
        <Profile />
      </StyledNavLink>
    </StyledHeaderBar>
  );
};
