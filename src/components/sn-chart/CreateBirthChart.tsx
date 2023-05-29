import React, { memo, useEffect, useRef } from "react";
import TitleChart from "./TitleChart";
import { useTranslation } from "react-i18next";
import { Stack, Typography } from "@mui/material";
import CreateForm, { CreateFormProps } from "./CreateForm";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantBirthAnimation } from "assets/animations";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { useMobile } from "hooks";

const CreateBirthChart = ({ onCreateChart }: CreateFormProps) => {
  const classes = useStyles();
  const isMobile = useMobile();

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
      <Stack flex={1} spacing={{ xs: 4, sm: 3 }}>
        <Stack spacing={2}>
          <TitleChart
            title={getLabel("lCreateYourOwnBirth", { count: isMobile ? 0 : 1 })}
            textAlign="center"
          />
          {isMobile && (
            <Typography fontSize={12} lineHeight="20px" textAlign="center">
              {getLabel("lCreateYourOwnBirthDesc")}
            </Typography>
          )}
        </Stack>
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
