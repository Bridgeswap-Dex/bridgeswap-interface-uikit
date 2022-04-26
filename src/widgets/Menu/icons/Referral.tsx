import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg"{...props}>
        <path d="M8.4 9.9999C11.0513 9.9999 13.2 7.85078 13.2 5.1999C13.2 2.54903 11.0513 0.399902 8.4 0.399902C5.74875 0.399902 3.6 2.54903 3.6 5.1999C3.6 7.85078 5.74875 9.9999 8.4 9.9999ZM10.3013 11.7999H6.49875C2.90887 11.7999 0 14.7099 0 18.2987C0 19.0187 0.582 19.5999 1.29975 19.5999H15.4987C16.2188 19.5999 16.8 19.0187 16.8 18.2987C16.8 14.7099 13.89 11.7999 10.3013 11.7999ZM17.9663 12.3999H15.1969C16.92 13.8137 18 15.9287 18 18.2987C18 18.7787 17.8575 19.2212 17.625 19.5999H22.8C23.4638 19.5999 24 19.0599 24 18.3662C24 15.0849 21.315 12.3999 17.9663 12.3999ZM16.2 9.9999C18.5213 9.9999 20.4 8.12115 20.4 5.7999C20.4 3.47865 18.5213 1.5999 16.2 1.5999C15.2584 1.5999 14.3985 1.92071 13.698 2.44403C14.13 3.27353 14.4 4.2024 14.4 5.1999C14.4 6.5319 13.9526 7.75515 13.2154 8.75153C13.9763 9.5199 15.03 9.9999 16.2 9.9999Z" fill="white"/>
    </Svg>

  );
};

export default Icon;
