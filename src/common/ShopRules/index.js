import { ContentContainer } from "../ContentContainer/styled";
import { Header, Content, Index, Paragraph } from "./styled";
import { shopRules } from "./shopRules";

export const ShopRules = () => (
  <ContentContainer>
    <Content>
      <Header>Regulamin sklepu</Header>
      {shopRules.map((rule) => (
        <>
          <Index>{rule.index}</Index>
          <Paragraph>{rule.content}</Paragraph>
        </>
      ))}
    </Content>
  </ContentContainer>
);
