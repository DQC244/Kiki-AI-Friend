import React, { memo } from "react";
import { SvgIcon } from "@mui/material";
import { IIconProps } from "models";

const ShowIcon = ({ sx, ...otherProps }: IIconProps) => {
  return (
    <SvgIcon viewBox="0 0 8 19" sx={{ fontSize: "inherit", ...sx }} {...otherProps}>
      <path
        d="M3.04883 18.2456L3.04883 1.24769C3.04883 1.06289 2.45559 0.913086 1.7238 0.913086C0.992002 0.913086 0.398766 1.06289 0.398766 1.24769L0.398765 18.2456C0.398765 18.4304 0.992002 18.5802 1.7238 18.5802C2.45559 18.5802 3.04883 18.4304 3.04883 18.2456Z"
        fill="#8861E4"
      />
      <path
        d="M7.46582 18.2456L7.46582 1.24769C7.46582 1.06289 6.87258 0.913086 6.14079 0.913086C5.40899 0.913086 4.81576 1.06289 4.81576 1.24769L4.81576 18.2456C4.81576 18.4304 5.40899 18.5802 6.14079 18.5802C6.87258 18.5802 7.46582 18.4304 7.46582 18.2456Z"
        fill="#8861E4"
      />
    </SvgIcon>
  );
};

export default memo(ShowIcon);
