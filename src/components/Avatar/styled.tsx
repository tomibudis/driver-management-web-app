import styled, { css } from "styled-components";

import { AvatarProps } from "./types";

const getBackground = (props: AvatarProps) => {
  if (props.img) {
    return css`
      background-image: url(${props.img});
      background-repeat: no-repeat;
      background-size: 58px 58px;
    `;
  }
};

const AvatarStyled = styled.div<AvatarProps>`
  width: ${(props) => props.size || 56}px;
  height: ${(props) => props.size || 56}px;
  padding: ${(props) => (props.size ? 6 : 12)}px;
  border-radius: 50%;
  ${getBackground}
`;

export default AvatarStyled;
