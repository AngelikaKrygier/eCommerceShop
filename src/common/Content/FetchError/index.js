import { Paragraph, StateErrorWrapper, StyledError } from "./styled";

export const FetchError = () => (
  <StateErrorWrapper>
    <StyledError />
    <Paragraph>
      Coś poszło nie tak.. Sprawdź połaczenie z internetem! :)
    </Paragraph>
  </StateErrorWrapper>
);
