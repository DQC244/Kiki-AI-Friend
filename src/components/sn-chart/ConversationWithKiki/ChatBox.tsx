import React, { ReactNode, memo } from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const ChatBox = ({ message, startIcon, imageSrc, ...otherProps }: ChatBoxProps) => {
  const classes = useStyles();

  return (
    <Stack spacing={1.75} direction={imageSrc ? "row-reverse" : "row"} {...otherProps}>
      <Box
        component="img"
        src={imageSrc || ImageAssets.LogoImage}
        className={classes.img}
        draggable="false"
      />
      <Box className={clsx(classes.textBox, imageSrc && classes.borderLight)}>
        {startIcon}
        <Typography className={classes.message}>{message}</Typography>
      </Box>
    </Stack>
  );
};

type ChatBoxProps = StackProps & {
  message?: string;
  imageSrc?: string;
  startIcon?: ReactNode;
};

export default memo(ChatBox);

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 42,
    height: 42,
    objectFit: "cover",
    borderRadius: "50%",
  },
  textBox: {
    display: "flex",
    alignItems: "center",
    padding: "10px 13px",
    border: "1px solid #8861E4",
    borderRadius: 15,
    backgroundColor: theme.palette.common.white,
    maxWidth: 300,
    fontSize: 24,
    color: theme.palette.secondary.dark,

    "& svg": {
      marginRight: 8,
    },
  },
  message: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    color: theme.palette.secondary.dark,
  },
  borderLight: {
    borderColor: "#FFD488",
  },
}));
