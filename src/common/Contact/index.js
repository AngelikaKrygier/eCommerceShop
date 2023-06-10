import {
  IconWrapper,
  StyledBasketIcon,
  StyledFbIcon,
  StyledMessageIcon,
} from "./styled";

export const Contact = ({ footer }) => (
  <IconWrapper>
    <StyledFbIcon footer={footer} />
    <StyledMessageIcon footer={footer} />
    <StyledBasketIcon footer={footer} />
  </IconWrapper>
);
