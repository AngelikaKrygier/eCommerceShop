import { Paragraph, Spinner, StateLoadingWrapper } from "./styled";

export const FetchLoading = () => (
  <StateLoadingWrapper>
    <Spinner></Spinner>
    <Paragraph> Trwa ładowanie... </Paragraph>
  </StateLoadingWrapper>
);
