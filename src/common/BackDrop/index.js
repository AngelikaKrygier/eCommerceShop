import { useState } from "react";
import {
  StyledBackDrop,
  StyledVectorPrevious,
  StyledVextorNext,
} from "./styled";

export const BackDrop = () => {
  const [backDrop, setBackDrop] = useState(false);

  return (
    <StyledBackDrop second={backDrop}>
      <StyledVectorPrevious onClick={() => setBackDrop(!backDrop)} />
      <StyledVextorNext onClick={() => setBackDrop(!backDrop)} />
    </StyledBackDrop>
  );
};
