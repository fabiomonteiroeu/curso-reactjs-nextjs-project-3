import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.secondaryColor};
  `}
`;
