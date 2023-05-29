import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const CloseIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 16 16" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M7.99967 1.33301C4.31301 1.33301 1.33301 4.31301 1.33301 7.99967C1.33301 11.6863 4.31301 14.6663 7.99967 14.6663C11.6863 14.6663 14.6663 11.6863 14.6663 7.99967C14.6663 4.31301 11.6863 1.33301 7.99967 1.33301ZM10.8663 10.8663C10.6063 11.1263 10.1863 11.1263 9.92634 10.8663L7.99967 8.93967L6.07301 10.8663C5.81301 11.1263 5.39301 11.1263 5.13301 10.8663C4.87301 10.6063 4.87301 10.1863 5.13301 9.92634L7.05967 7.99967L5.13301 6.07301C4.87301 5.81301 4.87301 5.39301 5.13301 5.13301C5.39301 4.87301 5.81301 4.87301 6.07301 5.13301L7.99967 7.05967L9.92634 5.13301C10.1863 4.87301 10.6063 4.87301 10.8663 5.13301C11.1263 5.39301 11.1263 5.81301 10.8663 6.07301L8.93967 7.99967L10.8663 9.92634C11.1197 10.1797 11.1197 10.6063 10.8663 10.8663Z"
        fill="#756CBF"
      />
      <path
        d="M10.8668 10.8668C10.6068 11.1268 10.1868 11.1268 9.92681 10.8668L8.00014 8.94014L6.07348 10.8668C5.81348 11.1268 5.39348 11.1268 5.13348 10.8668C4.87348 10.6068 4.87348 10.1868 5.13348 9.92681L7.06014 8.00014L5.13348 6.07348C4.87348 5.81348 4.87348 5.39348 5.13348 5.13348C5.39348 4.87348 5.81348 4.87348 6.07348 5.13348L8.00014 7.06014L9.92681 5.13348C10.1868 4.87348 10.6068 4.87348 10.8668 5.13348C11.1268 5.39348 11.1268 5.81348 10.8668 6.07348L8.94014 8.00014L10.8668 9.92681C11.1201 10.1801 11.1201 10.6068 10.8668 10.8668Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default memo(CloseIcon);
