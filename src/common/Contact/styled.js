import styled, { css } from "styled-components";
import { ReactComponent as FbIcon } from "../../images/fbIcon.svg";
import { ReactComponent as MessageIcon } from "../../images/message.svg";
import { ReactComponent as BasketIcon } from "../../images/basket.svg";

export const IconWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const StyledFbIcon = styled(FbIcon)`
  cursor: pointer;

  ${({ footer }) =>
    footer &&
    css`
      fill: ${({ theme }) => theme.colors.footer.icon};
      width: 30px;
    `}

  &:hover {
    fill: ${({ theme }) => theme.colors.headerBar.hoverIcon};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 30px;
  }
`;

export const StyledMessageIcon = styled(MessageIcon)`
  cursor: pointer;

  ${({ footer }) =>
    footer &&
    css`
      fill: ${({ theme }) => theme.colors.footer.icon};
      width: 30px;
    `}

  &:hover {
    fill: ${({ theme }) => theme.colors.headerBar.hoverIcon};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 30px;
  }
`;

export const StyledBasketIcon = styled(BasketIcon)`
  cursor: pointer;

  ${({ footer }) =>
    footer &&
    css`
      display: none;
    `}

  &:hover {
    fill: ${({ theme }) => theme.colors.headerBar.hoverIcon};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
    width: 30px;
  }
`;
