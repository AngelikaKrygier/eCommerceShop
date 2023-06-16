import { useState } from "react";
import { Contact } from "../Contact";
import { SearchBar } from "./SearchBar";
import { Header, Profile, StyledHeaderBar } from "./styled";
import { ProfileOptions } from "../../features/ProfileOptions";

export const HeaderBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <StyledHeaderBar>
      <Header>CLOTHING STORE</Header>
      <SearchBar />
      <Contact />
      <Profile onClick={() => setOpen(!open)} />
      {open ? (
        <>
        <ProfileOptions/>
        </>
      ) : (
        ""
      )}
    </StyledHeaderBar>
  );
};
