import { Contact } from "./Contact";
import { SearchBar } from "./SearchBar";
import { BackDrop, Header, StyledHeaderBar } from "./styled";

export const HeaderBar = () => (
  <StyledHeaderBar>
    <Header>CLOTHING STORE</Header>
    <SearchBar />
    <Contact />
  </StyledHeaderBar>
);
