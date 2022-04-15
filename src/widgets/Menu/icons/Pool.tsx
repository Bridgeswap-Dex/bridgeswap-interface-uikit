import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg height="20" viewBox="0 0 20 20" fill="none"
    {...props}
    >
      <path d="M0.194067 9.1644C0.0924779 8.55487 0.562521 8 1.18046 8H18.8195C19.4375 8 19.9075 8.55487 19.8059 9.1644L18.1393 19.1644C18.0589 19.6466 17.6417 20 17.1529 20H2.84713C2.35829 20 1.9411 19.6466 1.86073 19.1644L0.194067 9.1644Z" fill="white"/>
      <circle cx="4.5" cy="3.5" r="1.5" fill="white"/>
      <circle cx="7.5" cy="1.5" r="1.5" fill="white"/>
      <circle cx="11.5" cy="5.5" r="1.5" fill="white"/>
      <circle cx="14.5" cy="3.5" r="1.5" fill="white"/>
      <circle cx="11.5" cy="1.5" r="1.5" fill="white"/>
      <circle cx="7.5" cy="5.5" r="1.5" fill="white"/>
    </Svg>

  );
};

export default Icon;
