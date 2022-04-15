import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";


const Icon: React.FC<SvgProps> = (props) => {
    return (
        <Svg viewBox="0 0 30 30" fill="none" {...props}>
            <circle cx="15" cy="15" r="15" fill="white"/>
            <path d="M8.13778 9.90912H11.5511L15.1562 18.7046H15.3097L18.9148 9.90912H22.3281V23H19.6435V14.4794H19.5348L16.147 22.9361H14.3189L10.9311 14.4475H10.8224V23H8.13778V9.90912Z" fill="#09092B"/>
        </Svg>        
    );
};

export default Icon;
