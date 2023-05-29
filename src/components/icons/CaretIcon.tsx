import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const CaretIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 15 15" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M9.6875 11.875L5.3125 7.5L9.6875 3.125"
        stroke="currentColor"
        fill="transparent"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default memo(CaretIcon);
