/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo } from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CaretIcon } from "components/icons";
import { ThemeProps } from "models/types";
import clsx from "clsx";

const ImageSlide = ({ dataSelected, data, onNextImg, onPreImg, onChooseData }: ImageSlideProps) => {
  const classes = useStyles();

  return (
    <Stack
      spacing={{ xs: 2, sm: 2.75 }}
      className={classes.root}
      direction={{ xs: "column-reverse", lg: "row" }}
    >
      <Stack className={clsx("custom-scrollbar", classes.wrapperSmallImg)}>
        <Stack
          spacing={{ xs: 0, lg: 5 }}
          justifyContent={{ xs: "space-between", lg: "flex-start" }}
          direction={{ xs: "row", lg: "column" }}
        >
          {data?.map((item, index) => (
            <Button key={index} onClick={() => onChooseData(index)} className={classes.button}>
              <Box key={index} component="img" src={item?.url} className={classes.smallImg} />
            </Button>
          ))}
        </Stack>
      </Stack>
      <Box className={classes.previewImg}>
        <IconButton onClick={onPreImg} className={clsx(classes.iconButton, classes.preButton)}>
          <CaretIcon />
        </IconButton>
        <IconButton onClick={onNextImg} className={clsx(classes.iconButton, classes.nextButton)}>
          <CaretIcon sx={{ transform: "rotate(180deg)" }} />
        </IconButton>
        <Box component="img" src={dataSelected?.url} className={classes.preview} />
      </Box>
    </Stack>
  );
};

type ImageSlideProps = {
  data: [any];
  dataSelected: any;

  onChooseData: (data: any) => void;
  onNextImg: () => void;
  onPreImg: () => void;
};

export default memo(ImageSlide);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    minWidth: 580,

    [theme.breakpoints.down("lg")]: {
      minWidth: 500,
    },

    [theme.breakpoints.down("lg")]: {
      minWidth: 275,
    },
  },
  button: {
    width: 60,
    height: 60,
    minWidth: 60,
    minHeight: 60,
    padding: 0,
    borderRadius: 15,

    [theme.breakpoints.between("sm", "lg")]: {
      width: 80,
      height: 80,
    },
  },
  smallImg: {
    width: "100%",
    height: "100%",
    background: "#B5B5B5",
    objectFit: "cover",
    borderRadius: 15,
  },
  wrapperSmallImg: {
    overflow: "hidden scroll",
    maxHeight: 360,
  },
  previewImg: {
    position: "relative",
    background: "#D9D9D9",
    borderRadius: 30,
    maxHeight: 360,
    maxWidth: 495,
    width: 495,

    [theme.breakpoints.down("lg")]: {
      width: 500,
      height: 358,
      maxWidth: 500,
    },
    [theme.breakpoints.down("sm")]: {
      width: 275,
      height: 200,
      maxWidth: 275,
    },
  },
  preview: {
    width: "100%",
    height: "100%",
    borderRadius: 30,
    objectFit: "cover",
  },
  iconButton: {
    color: theme.palette.common.white,
    position: "absolute",
    background: theme.palette.gradient.main,
    width: 21,
    height: 21,
    padding: 0,
    borderRadius: "50%",
    top: "50%",
    transform: "translateY(-50%)",
  },
  preButton: {
    left: 18,

    [theme.breakpoints.down("sm")]: {
      left: -32,
    },
  },
  nextButton: {
    right: 18,
    [theme.breakpoints.down("sm")]: {
      right: -32,
    },
  },
}));
