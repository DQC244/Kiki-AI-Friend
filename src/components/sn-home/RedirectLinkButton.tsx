import React, { memo } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";

const RedirectLinkButton = ({ title, link, ...otherProps }: RedirectLinkButtonProps) => {
  const classes = useStyles();

  return (
    <Stack direction="row" spacing={2} {...otherProps}>
      <Typography className={classes.text}>{title}</Typography>
      <IconButton
        classes={{
          root: classes.button,
        }}
        href={link}
        target="_blank"
        size="small"
      ></IconButton>
    </Stack>
  );
};

type RedirectLinkButtonProps = {
  title: string;
  link: string;
};

export default memo(RedirectLinkButton);

const useStyles = makeStyles(() => ({
  text: {
    color: "#9AA2FF",
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
  button: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: `no-repeat top left / 100% 100% url(${ImageAssets.ArrowButtonBackground})`,
  },
}));
