import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const MenuIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M8.71998 6H21.6M8.71998 12.48H21.6M8.71998 18.96H21.6M3.59998 6V6.0128M3.59998 12.48V12.4928M3.59998 18.96V18.9728"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

export default memo(MenuIcon);
