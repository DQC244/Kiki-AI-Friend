import React, { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { CreateTransitChart, ViewTransitChart } from "components/sn-chart";
import clsx from "clsx";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import { MovePlantAnimation } from "assets/animations";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const TransitChart = () => {
  const classes = useStyles();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    setIsViewTransitChart(true);
    console.log(data);
  };

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
      lottieRef.current.setSpeed(0.2);
    }
  });

  return (
    <Box className={clsx(classes.root, !isViewTransitChart && classes.background)}>
      <Container className={classes.container}>
        {isViewTransitChart ? (
          <>
            <ViewTransitChart />
          </>
        ) : (
          <>
            <CreateTransitChart onCreateChart={handleCreateChart} />
            <Lottie
              animationData={MovePlantAnimation}
              onMouseOver={handleOverPlant}
              onMouseLeave={handleBlurPlant}
              lottieRef={lottieRef}
              style={{
                width: 1270,
                height: 450,
                position: "absolute",
                right: -600,
              }}
              autoplay={false}
            />
          </>
        )}
      </Container>
    </Box>
  );
};

export default TransitChart;

const useStyles = makeStyles(() => ({
  root: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
  background: {
    backgroundPosition: "right -590px center",
    backgroundSize: "1274px auto",
    // background: `no-repeat url(${ImageAssets.TransitChartGalaxyImage})`,
  },
  container: {
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: "center",
    display: "flex",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
}));
