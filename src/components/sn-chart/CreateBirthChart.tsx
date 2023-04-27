import React, { memo, useEffect, useRef } from "react";
import TitleChart from "./TitleChart";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";
import CreateForm, { CreateFormProps } from "./CreateForm";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantBirthAnimation } from "assets/animations";

const CreateBirthChart = ({ onCreateChart }: CreateFormProps) => {
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
    <Stack alignItems="center" spacing={15.5} direction="row" width="100%">
      <Stack flex={1} spacing={3}>
        <TitleChart title={getLabel("lCreateYourOwnBirth")} textAlign="center" />
        <CreateForm onCreateChart={onCreateChart} />
      </Stack>
      <Lottie
        animationData={MovePlantBirthAnimation}
        onMouseOver={handleOverPlant}
        onMouseLeave={handleBlurPlant}
        lottieRef={lottieRef}
        style={{
          width: 670,
        }}
        autoplay={false}
      />
    </Stack>
  );
};

export default memo(CreateBirthChart);
