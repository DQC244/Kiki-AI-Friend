import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const BagIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 31 25" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M28.8912 16.2491V22.1561C28.8912 23.1736 28.0494 24.0154 27.0319 24.0154H3.09408C2.07659 24.0154 1.23475 23.1736 1.23475 22.1561V16.2429C1.63039 16.348 2.04875 16.4108 2.47231 16.4108H10.9379V17.6483V18.1983H11.4879H18.4827H19.0327V17.6483V16.4108H27.6537C28.1155 16.4108 28.5182 16.35 28.8912 16.2491ZM16.9223 16.5543H13.2037V13.9237H16.9223V16.5543ZM21.2025 3.89193L21.2699 4.36415H21.7469H27.4982C28.5929 4.36415 29.4445 5.20923 29.513 6.24063V11.6639C29.513 12.6814 28.6712 13.5232 27.6537 13.5232H19.1104V12.5188V11.9688H18.5604H11.5656H11.0156V12.5188V13.5232H2.47231C1.45483 13.5232 0.612988 12.6814 0.612988 11.6639V6.22348C0.612988 5.21732 1.44337 4.36415 2.55004 4.36415H8.30133H8.77834L8.8458 3.89193C9.11773 1.98842 10.7495 0.555859 12.7314 0.555859H17.3169C19.2988 0.555859 20.9305 1.98842 21.2025 3.89193ZM10.0383 3.62619L9.76998 4.36415H10.5552H19.493H20.2783L20.0099 3.62619C19.6289 2.57827 18.5834 1.70975 17.3169 1.70975H12.7314C11.4649 1.70975 10.4194 2.57827 10.0383 3.62619Z"
        fill="transparent"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </SvgIcon>
  );
};

export default memo(BagIcon);
