import React, { memo, useMemo } from "react";
import { Link, To } from "react-router-dom";
import { Link as MuiLink, LinkProps } from "@mui/material";

const AppLink = (props: AppLinkProps) => {
  const { href, children, ...otherProps } = props;

  const nextRouter = useMemo(() => href || "#", [href]);

  return (
    <MuiLink component={Link} to={nextRouter} underline="hover" {...otherProps}>
      {children}
    </MuiLink>
  );
};

type AppLinkProps = LinkProps & {
  href?: To;
};

export default memo(AppLink);
