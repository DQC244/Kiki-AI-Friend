import React, { memo, useEffect, useRef } from "react";
import TitleChart from "./TitleChart";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import CreateForm, { CreateFormProps } from "./CreateForm";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantBirthAnimation } from "assets/animations";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";

const CreateBirthChart = ({ onCreateChart }: CreateFormProps) => {
  const classes = useStyles();

  const lottieRef = useRef<LottieRefCurrentProps>(null);
  const { t: getLabel } = useTranslation();

  const handleOverPlant = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };
  const handleBlurPlant = () => {
    if (lottieRef.current) {
      lottieRef.current.pause();
    }
  };

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.4);
    }
  }, []);

  return (
    <Stack
      alignItems="center"
      spacing={{ xs: 0, lg: 15.5 }}
      direction={{ xs: "column", lg: "row" }}
      width="100%"
    >
      <Stack flex={1} spacing={3}>
        <TitleChart title={getLabel("lCreateYourOwnBirth")} textAlign="center" />
        <CreateForm onCreateChart={onCreateChart} />
      </Stack>
      <Lottie
        animationData={MovePlantBirthAnimation}
        onMouseOver={handleOverPlant}
        onMouseLeave={handleBlurPlant}
        lottieRef={lottieRef}
        className={classes.lottie}
        autoplay={false}
      />
    </Stack>
  );
};

export default memo(CreateBirthChart);

const useStyles = makeStyles((theme: ThemeProps) => ({
  lottie: {
    width: 670,

    [theme.breakpoints.down("lg")]: {
      width: 550,
    },
    [theme.breakpoints.down("sm")]: {
      width: 360,
    },
  },
}));
