import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { useTranslation } from "react-i18next";
import { AppGradientButton } from "components/common";
import { Box, Stack, StackProps } from "@mui/material";
import { ImageAssets } from "assets";
import { ThemeProps } from "models/types";

const SealBackGroundButton = ({
  onClickAction,
  labelButton,
  ...otherProps
}: SealBackGroundButtonProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  return (
    <Stack {...otherProps}>
      <Box
        className={classes.img}
        component="img"
        src={ImageAssets.CreateSynastryChartImage}
        draggable="false"
      />
      <AppGradientButton
        onClick={onClickAction}
        classes={{ root: classes.rootBtn }}
        label={labelButton || getLabel("lViewSynastryChart")}
      />
    </Stack>
  );
};

type SealBackGroundButtonProps = StackProps & {
  labelButton?: string;
  onClickAction?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default memo(SealBackGroundButton);

const useStyles = makeStyles((theme: ThemeProps) => ({
  img: {
    width: 282,
    height: 203,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      width: 163,
      height: 116,
    },
  },
  rootBtn: {
    minWidth: 250,
    height: 63,
    marginTop: -13,

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "22px",
      padding: "9px 16px",
      minWidth: "unset",
      minHeight: "unset",
      height: 40,
      borderRadius: 10,
      marginTop: -7,
    },
  },
}));
