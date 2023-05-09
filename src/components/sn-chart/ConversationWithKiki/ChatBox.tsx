import React, { ReactNode, memo, useEffect, useState } from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const ChatBox = ({
  message,
  messageCustom,
  startIcon,
  imageSrc,
  contentCustom,
  ...otherProps
}: ChatBoxProps) => {
  const classes = useStyles();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Stack spacing={1.75} direction={imageSrc ? "row-reverse" : "row"} {...otherProps}>
      <Box
        component="img"
        src={imageSrc || ImageAssets.LogoImage}
        className={classes.img}
        draggable="false"
      />
      {!imageSrc && isLoading ? (
        <LoadingAnimation />
      ) : (
        <>
          {contentCustom ?? (
            <Box className={clsx(classes.textBox, imageSrc && classes.borderLight)}>
              {startIcon}
              {messageCustom || <Typography className={classes.message}>{message}</Typography>}
            </Box>
          )}
        </>
      )}
    </Stack>
  );
};

type ChatBoxProps = StackProps & {
  message?: string;
  messageCustom?: ReactNode;
  imageSrc?: string;
  startIcon?: ReactNode;
  contentCustom?: ReactNode;
};

const LoadingAnimation = () => {
  const classes = useStyles();

  return (
    <Box className={clsx(classes.textBox, classes.textBoxLoading)}>
      <div className="dot-pulse"></div>
    </Box>
  );
};

export default memo(ChatBox);

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 42,
    height: 42,
    objectFit: "cover",
    borderRadius: "50%",

    [theme.breakpoints.down("lg")]: {
      width: 34,
      height: 34,
    },
  },
  textBox: {
    minWidth: 76,
    display: "flex",
    alignItems: "center",
    padding: "10px 13px",
    border: "1px solid #8861E4",
    borderRadius: 15,
    backgroundColor: theme.palette.common.white,
    fontSize: 24,
    color: theme.palette.secondary.dark,

    "& svg": {
      marginRight: 8,
    },

    [theme.breakpoints.down("lg")]: {
      padding: "8px 10px",
      borderRadius: 12,
      fontSize: 22,
    },
  },
  message: {
    fontWeight: 400,
    fontSize: 14,
    lineHeight: "22px",
    color: theme.palette.secondary.dark,

    [theme.breakpoints.down("lg")]: {
      fontSize: 9,
      lineHeight: "17px",
    },
  },
  borderLight: {
    borderColor: "#FFD488",
  },
  textBoxLoading: {
    paddingLeft: 33,
  },
}));
