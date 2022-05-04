import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg
    width="276.000000pt" height="330.000000pt" viewBox="0 0 276.000000 330.000000"
    preserveAspectRatio="xMidYMid meet" {...props}>

    <g transform="translate(0.000000,330.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M3 2380 c3 -890 4 -907 25 -1002 61 -268 174 -484 351 -670 216 -228
    486 -369 796 -418 103 -16 315 -14 430 5 183 29 420 125 557 225 l53 39 267
    -267 268 -267 1 815 c1 986 2 924 -17 1040 -46 279 -180 537 -384 740 -187
    187 -388 302 -639 365 -375 94 -777 25 -1095 -189 -38 -25 -71 -46 -75 -46 -3
    0 -126 120 -274 268 l-268 267 4 -905z m1484 279 c415 -46 746 -325 870 -734
    l27 -90 4 -470 3 -470 -796 795 c-795 795 -795 795 -772 812 44 34 185 98 273
    123 147 42 246 50 391 34z m460 -1844 c-6 -17 -129 -83 -213 -114 -121 -44
    -223 -62 -354 -62 -517 0 -937 369 -1009 885 -6 45 -11 249 -11 483 l0 406
    795 -794 c437 -436 794 -798 792 -804z"/>
    </g>
    </Svg>
  );
};

export default Icon;
