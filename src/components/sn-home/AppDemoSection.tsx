import React, { memo } from "react";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";

const AppDemoSection = () => {
  const classes = useStyles();

  return (
    <Stack justifyContent="center">
      <Box
        className={classes.image}
        component="img"
        src={ImageAssets.AppDemoHomeBackground}
        draggable="false"
      />
    </Stack>
  );
};

export default memo(AppDemoSection);

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    height: "auto",
  },
}));
