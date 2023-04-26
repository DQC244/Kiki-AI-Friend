import React, { JSXElementConstructor, ReactElement, useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { CreateTransitChart } from "components/sn-chart";
import clsx from "clsx";
import Lottie, { LottieRefCurrentProps, useLottie, useLottieInteractivity } from "lottie-react";
import { MovePlantAnimation } from "assets/animations";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const options = {
  animationData: MovePlantAnimation,
};

const styles = {
  width: 500,
  height: 500,
};

const TransitChart = () => {
  const classes = useStyles();
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const [isViewTransitChart, setIsViewTransitChart] = useState(true);

  const lottieObj = useLottie(options, styles);
  const Animation: ReactElement<any, string | JSXElementConstructor<any>> = useLottieInteractivity({
    lottieObj,
    mode: "cursor",
    actions: [
      {
        position: { x: [0, 1], y: [0, 1] },
        type: "loop",
        frames: [1, 180],
      },
      {
        position: { x: -1, y: -1 },
        type: "stop",
        frames: [1],
      },
    ],
  });

  const handleCreateChart = (data: any) => {
    setIsViewTransitChart(true);
    console.log(data);
  };

  useEffect(() => {
    setTimeout(() => {
      if (lottieRef.current) {
        lottieRef.current.pause();
      }
    }, 3000);
  }, []);

  return (
    <Box className={clsx(classes.root, !isViewTransitChart && classes.background)}>
      <Container className={classes.container}>
        {isViewTransitChart ? (
          <>
            {/* <ViewTransitChart /> */}
            <Lottie
              lottieRef={lottieRef}
              style={{
                width: 800,
                height: 800,
              }}
              onPause={() => {
                console.log("pause");
              }}
              animationData={MovePlantAnimation}
            />
          </>
        ) : (
          <>
            <Box width={500} height={500}>
              {Animation}
            </Box>
            <CreateTransitChart onCreateChart={handleCreateChart} />
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
    background: `no-repeat url(${ImageAssets.TransitChartGalaxyImage})`,
  },
  container: {
    paddingTop: 80,
    paddingBottom: 80,
    alignItems: "center",
    display: "flex",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
}));
