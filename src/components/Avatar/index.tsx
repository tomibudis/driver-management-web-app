import React from "react";

import AvatarStyled from "./styled";
import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = (props) => {
  return <AvatarStyled img={props.img} size={props.size} />;
};

export default Avatar;
