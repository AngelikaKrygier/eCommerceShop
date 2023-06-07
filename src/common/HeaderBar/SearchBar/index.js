import { Button, ButtonIcon, Search, StyledSearchBar } from "./styled";

export const SearchBar = () => (
  <StyledSearchBar>
    <Search placeholder="Szukaj..." />
    <Button>
      <ButtonIcon />
    </Button>
  </StyledSearchBar>
);
