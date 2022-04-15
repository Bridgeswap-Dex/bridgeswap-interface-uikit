import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FB5230" : "#FB5230";
  // "#FB5230"
  return (

    <Svg height="21" viewBox="0 0 115 21" fill="none"
    {...props}
    >
      <path d="M0.114591 16V1.45455H5.68277C6.73391 1.45455 7.60749 1.62026 8.30351 1.9517C9.00427 2.27841 9.52747 2.72585 9.87311 3.29403C10.2235 3.86222 10.3987 4.50616 10.3987 5.22585C10.3987 5.81771 10.285 6.32434 10.0578 6.74574C9.8305 7.1624 9.5251 7.50095 9.14158 7.76136C8.75806 8.02178 8.32955 8.20881 7.85607 8.32244V8.46449C8.37217 8.4929 8.86696 8.65151 9.34044 8.94034C9.81866 9.22443 10.2093 9.62689 10.5123 10.1477C10.8153 10.6686 10.9669 11.2983 10.9669 12.0369C10.9669 12.7898 10.7846 13.4669 10.42 14.0682C10.0554 14.6648 9.50616 15.1359 8.77226 15.4815C8.03836 15.8272 7.11506 16 6.00237 16H0.114591ZM2.74953 13.7983H5.58334C6.53978 13.7983 7.2287 13.616 7.6501 13.2514C8.07624 12.8821 8.28931 12.4086 8.28931 11.831C8.28931 11.4001 8.18277 11.0118 7.9697 10.6662C7.75664 10.3158 7.45361 10.0412 7.06061 9.84233C6.66762 9.63873 6.19887 9.53693 5.65436 9.53693H2.74953V13.7983ZM2.74953 7.64062H5.35607C5.81061 7.64062 6.22018 7.55777 6.58476 7.39205C6.94934 7.22159 7.2358 6.98248 7.44414 6.67472C7.6572 6.36222 7.76374 5.9929 7.76374 5.56676C7.76374 5.00331 7.56487 4.5393 7.16715 4.17472C6.77416 3.81013 6.1894 3.62784 5.41289 3.62784H2.74953V7.64062ZM13.1455 16V5.09091H15.6384V6.90909H15.752C15.9509 6.27936 16.2918 5.79403 16.7747 5.45312C17.2624 5.10748 17.8188 4.93466 18.4438 4.93466C18.5858 4.93466 18.7444 4.94176 18.9196 4.95597C19.0996 4.96544 19.2487 4.98201 19.3671 5.00568V7.37074C19.2582 7.33286 19.0854 7.29972 18.8486 7.27131C18.6166 7.23816 18.3917 7.22159 18.1739 7.22159C17.7051 7.22159 17.2837 7.32339 16.9097 7.52699C16.5404 7.72585 16.2492 8.00284 16.0361 8.35795C15.823 8.71307 15.7165 9.12263 15.7165 9.58665V16H13.1455ZM21.0752 16V5.09091H23.6462V16H21.0752ZM22.3678 3.54261C21.9606 3.54261 21.6102 3.40767 21.3167 3.13778C21.0231 2.86316 20.8763 2.53409 20.8763 2.15057C20.8763 1.76231 21.0231 1.43324 21.3167 1.16335C21.6102 0.88873 21.9606 0.75142 22.3678 0.75142C22.7797 0.75142 23.1301 0.88873 23.4189 1.16335C23.7125 1.43324 23.8593 1.76231 23.8593 2.15057C23.8593 2.53409 23.7125 2.86316 23.4189 3.13778C23.1301 3.40767 22.7797 3.54261 22.3678 3.54261ZM30.3383 16.1918C29.4813 16.1918 28.7143 15.9716 28.0372 15.5312C27.3601 15.0909 26.8251 14.4517 26.4321 13.6136C26.0391 12.7756 25.8426 11.7576 25.8426 10.5597C25.8426 9.34754 26.0414 8.32481 26.4392 7.49148C26.8416 6.65341 27.3838 6.02131 28.0656 5.59517C28.7474 5.1643 29.5073 4.94886 30.3454 4.94886C30.9846 4.94886 31.5102 5.05777 31.9221 5.27557C32.3341 5.48864 32.6608 5.74669 32.9022 6.04972C33.1437 6.34801 33.3307 6.62973 33.4633 6.89489H33.5698V1.45455H36.148V16H33.6196V14.2812H33.4633C33.3307 14.5464 33.139 14.8281 32.888 15.1264C32.6371 15.42 32.3056 15.6709 31.8937 15.8793C31.4818 16.0876 30.9633 16.1918 30.3383 16.1918ZM31.0556 14.0824C31.6001 14.0824 32.0642 13.9356 32.4477 13.642C32.8312 13.3437 33.1224 12.9295 33.3213 12.3991C33.5201 11.8688 33.6196 11.2509 33.6196 10.5455C33.6196 9.83996 33.5201 9.2268 33.3213 8.70597C33.1271 8.18513 32.8383 7.7803 32.4548 7.49148C32.076 7.20265 31.6096 7.05824 31.0556 7.05824C30.4827 7.05824 30.0045 7.20739 29.621 7.50568C29.2375 7.80398 28.9486 8.21591 28.7545 8.74148C28.5604 9.26705 28.4633 9.86837 28.4633 10.5455C28.4633 11.2273 28.5604 11.8357 28.7545 12.3707C28.9534 12.901 29.2446 13.3201 29.6281 13.6278C30.0163 13.9309 30.4922 14.0824 31.0556 14.0824ZM43.632 20.3182C42.7087 20.3182 41.9156 20.1927 41.2527 19.9418C40.5899 19.6955 40.0572 19.3641 39.6547 18.9474C39.2523 18.5308 38.9729 18.0691 38.8167 17.5625L41.132 17.0014C41.2362 17.2145 41.3877 17.4252 41.5865 17.6335C41.7854 17.8466 42.0529 18.0218 42.3891 18.1591C42.73 18.3011 43.1585 18.3722 43.6746 18.3722C44.4038 18.3722 45.0075 18.1946 45.4857 17.8395C45.9639 17.4891 46.203 16.9115 46.203 16.1065V14.0398H46.0752C45.9426 14.3049 45.7485 14.5772 45.4928 14.8565C45.2418 15.1359 44.908 15.3703 44.4914 15.5597C44.0794 15.7491 43.561 15.8438 42.936 15.8438C42.0979 15.8438 41.338 15.6473 40.6561 15.2543C39.9791 14.8565 39.4393 14.2647 39.0368 13.4787C38.6391 12.688 38.4402 11.6984 38.4402 10.5099C38.4402 9.31203 38.6391 8.30114 39.0368 7.47727C39.4393 6.64867 39.9814 6.02131 40.6632 5.59517C41.3451 5.1643 42.105 4.94886 42.9431 4.94886C43.5823 4.94886 44.1078 5.05777 44.5198 5.27557C44.9364 5.48864 45.2679 5.74669 45.5141 6.04972C45.7603 6.34801 45.9473 6.62973 46.0752 6.89489H46.2172V5.09091H48.7527V16.1776C48.7527 17.1103 48.5302 17.8821 48.0851 18.4929C47.64 19.1037 47.0316 19.5606 46.2598 19.8636C45.4881 20.1667 44.6121 20.3182 43.632 20.3182ZM43.6533 13.8267C44.1978 13.8267 44.6618 13.6941 45.0453 13.429C45.4289 13.1638 45.7201 12.7827 45.9189 12.2855C46.1178 11.7884 46.2172 11.1918 46.2172 10.4957C46.2172 9.80919 46.1178 9.20786 45.9189 8.69176C45.7248 8.17566 45.436 7.77557 45.0524 7.49148C44.6737 7.20265 44.2073 7.05824 43.6533 7.05824C43.0804 7.05824 42.6022 7.20739 42.2186 7.50568C41.8351 7.80398 41.5463 8.21354 41.3522 8.73438C41.158 9.25047 41.061 9.83759 41.061 10.4957C41.061 11.1634 41.158 11.7481 41.3522 12.25C41.551 12.7472 41.8422 13.1354 42.2257 13.4148C42.614 13.6894 43.0899 13.8267 43.6533 13.8267ZM56.2172 16.2131C55.1235 16.2131 54.1789 15.9858 53.3834 15.5312C52.5927 15.072 51.9843 14.4233 51.5581 13.5852C51.132 12.7424 50.9189 11.7505 50.9189 10.6094C50.9189 9.48722 51.132 8.50237 51.5581 7.65483C51.989 6.80256 52.5903 6.13968 53.3621 5.66619C54.1339 5.18797 55.0406 4.94886 56.0823 4.94886C56.7546 4.94886 57.3891 5.05777 57.9857 5.27557C58.587 5.48864 59.1173 5.82008 59.5766 6.26989C60.0406 6.7197 60.4052 7.29261 60.6703 7.98864C60.9355 8.67992 61.0681 9.50379 61.0681 10.4602V11.2486H52.1263V9.51562H58.6036C58.5988 9.0232 58.4923 8.58523 58.284 8.2017C58.0756 7.81345 57.7845 7.50805 57.4104 7.28551C57.0411 7.06297 56.6102 6.9517 56.1178 6.9517C55.5922 6.9517 55.1306 7.07955 54.7328 7.33523C54.3351 7.58617 54.025 7.91761 53.8024 8.32955C53.5846 8.73674 53.4734 9.18419 53.4686 9.67188V11.1847C53.4686 11.8191 53.5846 12.3636 53.8167 12.8182C54.0487 13.268 54.373 13.6136 54.7897 13.8551C55.2063 14.0919 55.694 14.2102 56.2527 14.2102C56.6268 14.2102 56.9653 14.1581 57.2684 14.054C57.5714 13.9451 57.8342 13.7865 58.0567 13.5781C58.2792 13.3698 58.4473 13.1117 58.561 12.804L60.9615 13.0739C60.81 13.7083 60.5212 14.2623 60.0951 14.7358C59.6737 15.2045 59.1339 15.5691 58.4757 15.8295C57.8176 16.0852 57.0648 16.2131 56.2172 16.2131ZM71.2616 5.45312C71.1953 4.83286 70.916 4.34991 70.4235 4.00426C69.9359 3.65862 69.3014 3.4858 68.5201 3.4858C67.9709 3.4858 67.4998 3.56866 67.1068 3.73438C66.7138 3.90009 66.4131 4.125 66.2048 4.40909C65.9965 4.69318 65.8899 5.01752 65.8852 5.3821C65.8852 5.68513 65.9538 5.94792 66.0912 6.17045C66.2332 6.39299 66.425 6.58239 66.6664 6.73864C66.9079 6.89015 67.1754 7.01799 67.469 7.12216C67.7626 7.22633 68.0585 7.31392 68.3568 7.38494L69.7204 7.72585C70.2697 7.85369 70.7976 8.02651 71.3042 8.24432C71.8156 8.46212 72.2725 8.73674 72.675 9.06818C73.0822 9.39962 73.4041 9.79972 73.6409 10.2685C73.8776 10.7372 73.996 11.2865 73.996 11.9162C73.996 12.7685 73.7782 13.5189 73.3426 14.1676C72.907 14.8116 72.2772 15.3158 71.4534 15.6804C70.6342 16.0402 69.6423 16.2202 68.4775 16.2202C67.3459 16.2202 66.3634 16.045 65.5301 15.6946C64.7015 15.3442 64.0528 14.8329 63.5841 14.1605C63.12 13.4882 62.8691 12.669 62.8312 11.7031H65.4235C65.4614 12.2098 65.6177 12.6312 65.8923 12.9673C66.1669 13.3035 66.5244 13.5545 66.9647 13.7202C67.4098 13.8859 67.907 13.9688 68.4562 13.9688C69.0291 13.9688 69.531 13.8835 69.9619 13.7131C70.3975 13.5379 70.7384 13.2964 70.9846 12.9886C71.2308 12.6761 71.3563 12.3116 71.361 11.8949C71.3563 11.5161 71.245 11.2036 71.0272 10.9574C70.8094 10.7064 70.504 10.4981 70.111 10.3324C69.7228 10.1619 69.2682 10.0104 68.7474 9.87784L67.0926 9.4517C65.8947 9.14394 64.9477 8.67756 64.2517 8.05256C63.5604 7.42282 63.2147 6.58712 63.2147 5.54545C63.2147 4.68845 63.4467 3.93797 63.9108 3.29403C64.3795 2.65009 65.0163 2.15057 65.8213 1.79545C66.6262 1.43561 67.5376 1.25568 68.5556 1.25568C69.5878 1.25568 70.4922 1.43561 71.2687 1.79545C72.05 2.15057 72.6631 2.64536 73.1082 3.27983C73.5533 3.90956 73.7829 4.634 73.7971 5.45312H71.2616ZM78.4828 16L75.4005 5.09091H78.0212L79.9388 12.7614H80.0382L81.9985 5.09091H84.5908L86.551 12.7188H86.6576L88.5468 5.09091H91.1746L88.0851 16H85.4076L83.3621 8.62784H83.213L81.1675 16H78.4828ZM96.1089 16.2202C95.4176 16.2202 94.795 16.0971 94.241 15.8509C93.6918 15.5999 93.2562 15.2306 92.9342 14.7429C92.617 14.2552 92.4583 13.6539 92.4583 12.9389C92.4583 12.3234 92.572 11.8144 92.7992 11.4119C93.0265 11.0095 93.3367 10.6875 93.7296 10.446C94.1226 10.2045 94.5653 10.0223 95.0578 9.89915C95.5549 9.77131 96.0687 9.67898 96.599 9.62216C97.2382 9.55587 97.7566 9.49669 98.1544 9.4446C98.5521 9.38778 98.8409 9.30256 99.0208 9.18892C99.2055 9.07055 99.2978 8.88826 99.2978 8.64205V8.59943C99.2978 8.06439 99.1392 7.65009 98.822 7.35653C98.5047 7.06297 98.0478 6.91619 97.4512 6.91619C96.8215 6.91619 96.322 7.0535 95.9527 7.32812C95.5881 7.60275 95.3419 7.92708 95.214 8.30114L92.8135 7.96023C93.0028 7.29735 93.3153 6.74337 93.751 6.2983C94.1866 5.84848 94.7192 5.51231 95.349 5.28977C95.9787 5.0625 96.6747 4.94886 97.437 4.94886C97.9626 4.94886 98.4858 5.01042 99.0066 5.13352C99.5275 5.25663 100.003 5.46023 100.434 5.74432C100.865 6.02367 101.211 6.40483 101.471 6.88778C101.736 7.37074 101.869 7.97443 101.869 8.69886V16H99.3973V14.5014H99.312C99.1558 14.8045 98.9356 15.0885 98.6515 15.3537C98.3722 15.6141 98.0194 15.8248 97.5933 15.9858C97.1719 16.142 96.6771 16.2202 96.1089 16.2202ZM96.7765 14.331C97.2926 14.331 97.7401 14.2292 98.1189 14.0256C98.4976 13.8172 98.7888 13.5426 98.9924 13.2017C99.2008 12.8608 99.3049 12.4891 99.3049 12.0866V10.8011C99.2244 10.8674 99.0871 10.929 98.893 10.9858C98.7036 11.0426 98.4905 11.0923 98.2538 11.1349C98.0171 11.1776 97.7827 11.2154 97.5507 11.2486C97.3187 11.2817 97.1174 11.3101 96.947 11.3338C96.5635 11.3859 96.2202 11.4711 95.9171 11.5895C95.6141 11.7079 95.375 11.8736 95.1998 12.0866C95.0246 12.295 94.937 12.5649 94.937 12.8963C94.937 13.3698 95.1099 13.7273 95.4555 13.9688C95.8011 14.2102 96.2415 14.331 96.7765 14.331ZM104.454 20.0909V5.09091H106.982V6.89489H107.132C107.264 6.62973 107.451 6.34801 107.693 6.04972C107.934 5.74669 108.261 5.48864 108.673 5.27557C109.085 5.05777 109.61 4.94886 110.25 4.94886C111.092 4.94886 111.852 5.1643 112.529 5.59517C113.211 6.02131 113.751 6.65341 114.149 7.49148C114.551 8.32481 114.752 9.34754 114.752 10.5597C114.752 11.7576 114.556 12.7756 114.163 13.6136C113.77 14.4517 113.235 15.0909 112.558 15.5312C111.881 15.9716 111.114 16.1918 110.257 16.1918C109.632 16.1918 109.113 16.0876 108.701 15.8793C108.289 15.6709 107.958 15.42 107.707 15.1264C107.461 14.8281 107.269 14.5464 107.132 14.2812H107.025V20.0909H104.454ZM106.975 10.5455C106.975 11.2509 107.075 11.8688 107.274 12.3991C107.477 12.9295 107.768 13.3437 108.147 13.642C108.531 13.9356 108.995 14.0824 109.539 14.0824C110.107 14.0824 110.583 13.9309 110.967 13.6278C111.35 13.3201 111.639 12.901 111.833 12.3707C112.032 11.8357 112.132 11.2273 112.132 10.5455C112.132 9.86837 112.035 9.26705 111.84 8.74148C111.646 8.21591 111.357 7.80398 110.974 7.50568C110.59 7.20739 110.112 7.05824 109.539 7.05824C108.99 7.05824 108.524 7.20265 108.14 7.49148C107.757 7.7803 107.465 8.18513 107.267 8.70597C107.072 9.2268 106.975 9.83996 106.975 10.5455Z" fill="#F8A61C"/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
