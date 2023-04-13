import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const HeartIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 31 30" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M26.4841 1.25448C25.8472 0.659003 24.8454 0.682845 24.2387 1.30791L23.8173 1.74199L23.375 1.32847C22.7381 0.732995 21.7363 0.756838 21.1295 1.38191C20.5228 2.00698 20.5471 2.99019 21.184 3.58566L23.9262 6.14951L26.5386 3.45823C27.1453 2.83316 27.1209 1.8443 26.4841 1.25448Z"
        fill="currentColor"
      />
      <path
        d="M29.6823 6.72134C29.6389 6.22381 29.1955 5.85742 28.6885 5.90012L28.3364 5.92977L28.3062 5.58426C28.2628 5.08673 27.8194 4.72034 27.3124 4.76304C26.8053 4.80573 26.4319 5.24091 26.4753 5.73844L26.6623 7.88057L28.8453 7.69674C29.3523 7.65405 29.7279 7.21637 29.6823 6.72134Z"
        fill="currentColor"
      />
      <path
        d="M24.129 9.2439L24.1315 9.24637C26.4663 11.589 26.4698 15.4296 24.1291 17.8002L13.3483 28.7181L2.56756 17.8002C0.228131 15.431 0.228131 11.6131 2.56756 9.24389C4.90178 6.87997 8.6555 6.87997 10.9897 9.24389L12.8146 11.092L13.3483 11.6325L13.882 11.092L15.7069 9.24389C18.0411 6.87997 21.7948 6.87997 24.129 9.2439Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </SvgIcon>
  );
};

export default memo(HeartIcon);
