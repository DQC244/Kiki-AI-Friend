import React, { memo } from "react";
import { Box, Link, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import { AppConstant } from "const";

const Logo = () => {
  const classes = useStyles();

  return (
    <Stack
      spacing={4}
      direction="row"
      alignItems="center"
      component={Link}
      href="/"
      underline="none"
    >
      <Box className={classes.img} component="img" src={ImageAssets.LogoImage} draggable="false" />
      <Typography className={classes.text}>{AppConstant.APP_TITLE}</Typography>
    </Stack>
  );
};

export default memo(Logo);

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 50,
    height: 50,
  },
  text: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    color: theme.palette.common.black,
  },
}));
