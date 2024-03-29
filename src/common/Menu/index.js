import {
  toBlouses,
  toDresses,
  toMainPage,
  toPants,
  toShoes,
} from "../../root/routes";
import { MenuItem, StyledMenu, StyledNavLink } from "./styled";

export const Menu = () => (
  <StyledMenu>
    <MenuItem>
      <StyledNavLink to={toMainPage}>Strona Główna</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to={toDresses}>Sukienki</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to={toPants}>Spodnie</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to={toShoes}>Buty</StyledNavLink>
    </MenuItem>
    <MenuItem>
      <StyledNavLink to={toBlouses}>Topy</StyledNavLink>
    </MenuItem>
  </StyledMenu>
);
