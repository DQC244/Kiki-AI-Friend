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
    <Stack spacing={2.75} className={classes.root} direction="row">
      <Stack className={clsx("custom-scrollbar", classes.wrapperSmallImg)}>
        <Stack spacing={5}>
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
  },
  button: {
    width: 60,
    height: 60,
    minWidth: 60,
    minHeight: 60,
    padding: 0,
    borderRadius: 15,
  },
  smallImg: {
    width: 60,
    height: 60,
    background: "#B5B5B5",
    objectFit: "cover",
    borderRadius: 15,
  },
  wrapperSmallImg: {
    overflow: "hidden scroll",
    maxHeight: 360,
  },
  previewImg: {
    flex: 1,
    position: "relative",
    background: "#D9D9D9",
    borderRadius: 30,
    maxHeight: 360,
    maxWidth: 495,
    overflow: "hidden",
  },
  preview: {
    width: "100%",
    height: "100%",
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
  },
  nextButton: {
    right: 18,
  },
}));
