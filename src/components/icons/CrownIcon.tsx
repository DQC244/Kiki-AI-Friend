import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const CrownIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 34 22" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M31.975 12.7745C32.7992 10.4434 30.8532 8.00256 28.7469 8.96243C28.4951 8.7156 28.1974 8.57848 27.8311 8.6059C27.4877 8.63333 27.1901 8.79788 26.9382 9.01728C27.1443 7.53634 26.4117 5.836 25.3585 5.09553C24.1222 4.24536 22.3594 4.57446 21.6725 6.0554C21.3062 5.20523 20.5507 4.68416 19.7494 4.65674C19.8639 4.65674 20.1386 3.86142 20.1615 3.72429C20.2531 3.45005 20.3447 3.14837 20.3904 2.8467C20.4591 2.38048 20.4133 1.91426 20.276 1.47546C20.0012 0.597869 19.2915 -0.0877501 18.4673 0.159073C18.101 0.268772 17.7805 0.515595 17.5286 0.844692C17.4142 0.981816 17.3226 1.14636 17.2768 1.31091C17.2768 1.33834 17.2768 1.36576 17.2768 1.36576C17.2768 1.33834 17.2768 1.31091 17.2768 1.31091C17.231 1.11894 17.1394 0.981816 17.025 0.844692C16.7731 0.515595 16.4526 0.268772 16.0863 0.159073C15.2621 -0.0603253 14.5753 0.625294 14.3005 1.50289C14.1632 1.94168 14.1174 2.4079 14.1861 2.87413C14.2319 3.1758 14.3005 3.47747 14.415 3.75172C14.4608 3.86142 14.7355 4.68416 14.8271 4.68416C14.0258 4.71159 13.2474 5.20523 12.904 6.08283C12.2172 4.60189 10.4772 4.24537 9.21799 5.12296C8.16485 5.86343 7.40934 7.56376 7.63828 9.0447C7.38644 8.8253 7.08882 8.66075 6.7454 8.63333C6.40198 8.6059 6.08146 8.74303 5.82962 8.98985C3.70045 7.97513 1.75443 10.4434 2.57862 12.7745C1.36522 12.9939 0.495235 14.42 0.953123 15.9557C1.29654 17.1624 2.30389 17.6287 3.26545 17.8481C3.03651 17.7932 2.96783 18.945 2.96783 19.0822C2.92204 21.331 5.41753 21.6875 6.79119 21.7149C6.95145 21.7149 7.47802 21.7972 7.47802 21.4955C7.47802 21.2213 7.04303 21.0293 6.85987 20.9745C6.21883 20.7002 5.41753 20.4534 4.98253 19.7952C4.73069 19.4113 4.61622 18.9176 4.93674 18.424C5.18858 18.0126 5.60068 17.7658 5.98988 17.5464C9.51562 15.6266 13.3848 14.6668 17.2768 14.6668C21.146 14.6668 25.0151 15.6541 28.5637 17.5464C28.9529 17.7658 29.365 17.9852 29.6169 18.424C29.9145 18.945 29.8229 19.4113 29.5711 19.7952C29.1361 20.4534 28.3348 20.7002 27.6938 20.9745C27.5335 21.0568 27.0985 21.2487 27.0756 21.4955C27.0756 21.7972 27.6022 21.7149 27.7624 21.7149C29.1361 21.6875 31.6545 21.331 31.5858 19.0822C31.5858 18.945 31.5171 17.7932 31.2882 17.8481C32.2497 17.6561 33.2571 17.1899 33.6005 15.9557C34.0584 14.42 33.1884 12.9939 31.975 12.7745ZM29.2964 10.0594C29.4108 10.0046 29.5253 10.0046 29.6169 10.0046C30.2579 10.0594 30.7845 10.4159 30.899 11.2387C30.9676 11.6775 30.9219 12.1437 30.8761 12.5825C30.9219 12.1986 30.2579 11.842 30.029 11.7323C29.7313 11.5678 29.2048 11.3484 28.9529 11.7323C29.1361 11.4855 29.1819 10.9644 29.1819 10.6353C29.2048 10.4434 29.159 10.1691 29.2964 10.0594ZM26.7551 10.7176C26.984 10.5256 27.213 10.224 27.4648 10.2514C27.648 10.2514 27.7853 10.4434 27.854 10.6353C27.9227 10.8273 27.8998 11.0467 27.854 11.2661C27.7853 11.5678 27.648 11.8695 27.4648 12.1437C27.1672 12.5825 26.7551 12.9939 26.3888 13.323C26.5032 12.4454 26.6635 11.5952 26.7551 10.7176ZM22.2449 7.59119C22.5196 7.04269 22.9088 6.54905 23.3896 6.30222C23.9162 6.02798 24.5572 6.0554 25.0609 6.3845C25.2212 6.4942 25.3585 6.63132 25.4959 6.82329C25.8164 7.31694 25.9309 8.02998 25.9538 8.66075C25.4959 8.05741 24.6259 7.92029 24.0535 8.38651C23.4812 8.8253 23.3438 9.53835 23.4354 10.224C22.8401 9.62062 22.1991 9.2641 21.6038 9.29152C21.6038 9.29152 22.1533 7.72831 22.2449 7.59119ZM9.08063 6.82329C9.1951 6.63132 9.33246 6.4942 9.51562 6.3845C9.9964 6.0554 10.6603 6.02798 11.1869 6.30222C11.6906 6.54905 12.0798 7.04269 12.3316 7.59119C12.4003 7.72831 12.9727 9.31895 12.9727 9.31895C12.3774 9.2641 11.7364 9.64805 11.1411 10.2514C11.2327 9.53835 11.0724 8.85273 10.523 8.41393C9.95061 7.97513 9.08063 8.11226 8.62274 8.68818C8.64563 8.02998 8.7601 7.31694 9.08063 6.82329ZM6.72251 10.6353C6.79119 10.4434 6.92855 10.2788 7.11171 10.2514C7.36355 10.224 7.59249 10.5256 7.82143 10.7176C7.91301 11.5678 8.07327 12.4454 8.18774 13.2955C7.82143 12.9939 7.40934 12.5825 7.11171 12.1163C6.92855 11.8146 6.76829 11.5129 6.72251 11.2387C6.67672 11.0467 6.65382 10.8273 6.72251 10.6353ZM3.65466 11.2113C3.79203 10.3885 4.2957 10.032 4.93674 9.97714C5.05122 9.97714 5.14279 9.97714 5.23437 10.032C5.23437 10.032 5.25727 10.032 5.25727 10.0594C5.39463 10.1691 5.34884 10.4434 5.34884 10.6079C5.34884 10.9096 5.41753 11.4307 5.57779 11.7049C5.32595 11.321 4.79938 11.5678 4.50175 11.7049C4.27281 11.8146 3.60887 12.1711 3.65466 12.5551C3.60887 12.1437 3.58598 11.6775 3.65466 11.2113ZM5.69226 16.0106C5.00543 16.422 4.15834 16.6414 3.37993 16.3945C3.28835 16.3671 3.17388 16.3123 3.05941 16.2574C2.41836 15.9283 1.68574 15.1604 2.18942 14.3103C2.60152 13.6795 3.03651 14.1183 3.37993 14.5845C3.70045 15.0233 4.15834 15.325 4.59333 15.5444C4.98253 15.7363 5.55489 16.0654 5.98988 15.8186C5.9212 15.9009 5.80673 15.9557 5.69226 16.0106ZM8.27932 14.8313C7.34065 14.6119 3.4944 15.3524 4.08965 13.3778C4.41017 12.3357 5.60068 12.5551 6.35619 12.9116C6.47067 12.9664 6.65382 13.2133 6.76829 13.323C6.95145 13.4875 7.1346 13.6246 7.31776 13.7618C7.70696 14.0634 7.9588 14.3925 8.25643 14.8039C8.27932 14.8313 8.27932 14.8313 8.27932 14.8313ZM8.82879 12.6648C8.783 12.3905 8.71432 12.1163 8.66853 11.842C8.59984 11.4581 8.50827 11.0741 8.43958 10.6902C8.64563 10.3337 8.59984 9.62062 9.21799 9.86744C9.51562 9.97714 9.69877 10.3337 9.72167 10.7176C9.74456 11.0741 9.60719 11.4307 9.44693 11.7323C9.28667 12.034 9.08063 12.3082 8.89747 12.6099C8.85168 12.6099 8.85168 12.6373 8.82879 12.6648ZM12.0798 13.5972C11.6448 13.8715 11.164 14.036 10.6832 14.1457C10.4314 14.2006 10.1796 14.2828 9.92772 14.3103C9.74456 14.3377 9.44694 14.3377 9.30957 14.4748C9.40115 14.3651 9.46983 14.0634 9.53851 13.9263C9.63009 13.7069 9.72167 13.5149 9.83614 13.2955C10.0193 12.9116 10.2482 12.5551 10.5001 12.226C10.958 11.5952 11.4845 10.937 12.1256 10.6079C12.4919 10.4159 12.9956 10.4434 13.3161 10.6902C13.5908 10.8822 13.7511 11.2387 13.6595 11.7049C13.4992 12.6099 12.6979 13.2133 12.0798 13.5972ZM13.5679 13.4875C14.0029 13.0487 14.3234 12.5825 14.4837 12.0889C14.85 12.5551 15.2392 12.9664 15.6284 13.2955C14.9416 13.323 14.2548 13.4052 13.5679 13.4875ZM16.7731 12.5002C16.7502 12.5276 16.7502 12.5276 16.7273 12.5551C16.4984 12.3082 16.2924 11.8695 16.0863 11.5678C15.6971 10.9919 15.3308 10.4159 14.9416 9.84002C14.415 9.0447 14.0029 8.33166 14.3234 7.28952C14.4837 6.76844 14.9187 6.35707 15.3766 6.41192C15.7429 6.46677 16.0176 6.82329 16.2237 7.17982C16.4297 7.53634 16.7045 7.89286 16.7273 8.33166C16.7731 9.01728 16.7273 9.67547 16.7731 10.3611C16.8418 11.1016 16.8876 11.8146 16.7731 12.5002ZM17.2768 6.24737C17.2768 6.19252 17.2539 6.13767 17.231 6.0554C17.1166 5.7263 16.8876 5.47948 16.7502 5.20523C16.4297 4.51961 15.9718 3.99854 15.6055 3.36777C15.3766 2.9564 15.285 2.38048 15.6284 2.02396C15.7887 1.85941 16.0176 1.80456 16.2237 1.88683C16.3839 1.94168 16.5213 2.07881 16.6587 2.21593C16.8647 2.43533 17.0708 2.68215 17.2539 2.92898C17.2539 2.92898 17.2539 2.92898 17.2539 2.9564C17.2539 2.9564 17.2539 2.9564 17.2539 2.92898C17.4371 2.68215 17.6431 2.43533 17.8492 2.21593C17.9865 2.07881 18.1239 1.94168 18.2842 1.88683C18.5131 1.77713 18.7649 1.85941 18.9252 2.02396C19.2686 2.38048 19.177 2.9564 18.9481 3.36777C18.5818 3.99854 18.1239 4.54704 17.8034 5.20523C17.666 5.5069 17.4371 5.75373 17.3226 6.0554C17.2997 6.11025 17.2997 6.19252 17.2768 6.24737ZM17.8263 12.5551C17.8034 12.5276 17.8034 12.5002 17.7805 12.5002C17.666 11.8146 17.7347 11.1016 17.7576 10.4159C17.7805 9.73032 17.7576 9.07213 17.8034 8.38651C17.8263 7.94771 18.0781 7.56376 18.3071 7.23467C18.5131 6.87814 18.7878 6.52162 19.1542 6.46677C19.612 6.3845 20.047 6.82329 20.2073 7.34436C20.5278 8.38651 20.1157 9.09955 19.5891 9.89487C19.1999 10.4708 18.8336 11.0467 18.4444 11.6226C18.2613 11.8695 18.0552 12.3082 17.8263 12.5551ZM18.9481 13.2955C19.3373 12.939 19.7265 12.5276 20.0928 12.0889C20.2531 12.5825 20.5736 13.0761 21.0086 13.4875C20.2989 13.4052 19.6349 13.323 18.9481 13.2955ZM24.6259 14.3103C24.3741 14.2554 24.1222 14.2006 23.8704 14.1457C23.3896 14.0086 22.9088 13.844 22.4738 13.5972C21.8557 13.2133 21.0544 12.6099 20.8941 11.7323C20.8254 11.2661 20.9857 10.9096 21.2375 10.7176C21.5581 10.4708 22.0617 10.4159 22.428 10.6353C23.0691 10.9919 23.5957 11.6501 24.0535 12.2534C24.3054 12.5825 24.5114 12.939 24.7175 13.323C24.832 13.5149 24.9235 13.7343 25.0151 13.9537C25.0838 14.0909 25.1525 14.42 25.2441 14.5022C25.1296 14.3377 24.8091 14.3651 24.6259 14.3103ZM25.908 11.842C25.8622 12.1163 25.7935 12.3905 25.7477 12.6648C25.7248 12.6373 25.7248 12.6099 25.7019 12.5825C25.5188 12.2808 25.3127 12.0066 25.1525 11.7049C24.9922 11.4032 24.8548 11.0467 24.8777 10.6902C24.9006 10.3337 25.0838 9.94972 25.3814 9.84002C25.9767 9.62062 25.9309 10.3337 26.1598 10.6628C26.0454 11.0741 25.9767 11.4581 25.908 11.842ZM26.2972 14.8313C26.2972 14.8039 26.2972 14.8039 26.2972 14.8039C26.5948 14.3925 26.8467 14.0634 27.2359 13.7618C27.419 13.6246 27.6022 13.4875 27.7853 13.323C27.8998 13.2133 28.083 12.9664 28.1974 12.9116C28.9529 12.5551 30.1434 12.3357 30.464 13.3778C31.0821 15.3798 27.2359 14.6119 26.2972 14.8313ZM31.4713 16.2574C31.3569 16.3123 31.2653 16.3671 31.1508 16.3945C30.3724 16.6414 29.5482 16.4494 28.8385 16.0106C28.7469 15.9557 28.6324 15.9009 28.5179 15.8186C28.9529 16.0654 29.5024 15.7363 29.9145 15.5444C30.3724 15.325 30.8074 15.0233 31.1279 14.5845C31.4713 14.1183 31.9063 13.6795 32.3184 14.3103C32.8679 15.1604 32.1124 15.9283 31.4713 16.2574Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default memo(CrownIcon);