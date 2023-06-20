import { Address, Paragraph, StyledFooter } from "./styled";
import { Contact } from "../Contact";

export const Footer = () => (
  <StyledFooter>
    <Contact footer="true"/>
    <Address>
      <Paragraph>Clothing Store</Paragraph>
      <Paragraph>Ul. ŚW. Jana 18 </Paragraph>
      <Paragraph>85-828 Włocławek</Paragraph>
    </Address>
    <Paragraph clause>© 2023 - Wszystkie prawa zastrzeżone</Paragraph>
  </StyledFooter>
);
