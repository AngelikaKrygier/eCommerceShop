import {
  IconWrapper,
  StyledBasketIcon,
  StyledFbIcon,
  StyledMessageIcon,
} from "./styled";

export const Contact = ({ footer }) => (
  <IconWrapper>
    <a
      href="https://www.facebook.com/"
      rel="noreferrer noopener"
      target="_blank"
    >
      <StyledFbIcon footer={footer} />
    </a>
    <a href="mailto:adrese-mailp@com.pl">
      <StyledMessageIcon footer={footer} />
    </a>
    <StyledBasketIcon footer={footer} />
  </IconWrapper>
);
