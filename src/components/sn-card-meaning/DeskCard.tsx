import React, { memo } from "react";
import { Box, Stack, StackProps, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { AppGradientButton } from "components/common";
import { useTranslation } from "react-i18next";

const DeskCard = ({ name, onClickView, ...otherProps }: DeskCardProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack alignItems="center" spacing={4} {...otherProps}>
      <Stack direction="row">
        <Box className={classes.imgRoot}>
          {CARD_ARR.map((_, index) => {
            return (
              <Box
                key={index}
                className={classes.img}
                component="img"
                src={ImageAssets.TarotCardDailyBackground}
                draggable="false"
              />
            );
          })}
        </Box>
      </Stack>

      <Typography className={classes.name}>{name}</Typography>
      <AppGradientButton
        onClick={onClickView}
        className={classes.button}
        label={getLabel("lViewCards")}
      />
    </Stack>
  );
};

type DeskCardProps = StackProps & {
  name?: string;
  onClickView: () => void;
};

export default memo(DeskCard);
const TOTAL = 6;
const CARD_ARR = Array.from(Array(TOTAL).keys());

const useStyles = makeStyles(() => ({
  imgRoot: {
    position: "relative",
    width: 227,
    height: 320,

    "&:hover": {
      "& $img:nth-child(1)": {
        transform: "translate(-80%,35px) rotate(-21.875deg)",
        zIndex: 1,
      },

      "& $img:nth-child(2)": {
        transform: "translate(-48%,15px) rotate(-13.125deg)",
        zIndex: 2,
      },

      "& $img:nth-child(3)": {
        transform: "translate(-16%,5px) rotate(-4.375deg)",
        zIndex: 3,
      },

      "& $img:nth-child(4)": {
        transform: "translate(16%,5px) rotate(4.375deg)",
        zIndex: 4,
      },

      "& $img:nth-child(5)": {
        transform: "translate(48%,15px) rotate(13.125deg)",
        zIndex: 5,
      },

      "& $img:nth-child(6)": {
        transform: "translate(80%,35px) rotate(21.875deg)",
        zIndex: 6,
      },
    },
  },
  img: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "all 1000ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
  name: {
    fontWeight: 700,
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    height: 50,
    minWidth: 157,
  },
}));
