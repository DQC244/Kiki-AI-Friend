/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { CreateSynastryChart, ViewSynastryChart } from "components/sn-chart";
import clsx from "clsx";

const SynastryChart = () => {
  const classes = useStyles();
  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    setIsViewTransitChart(true);
    console.log(data);
  };

  return (
    <Box className={clsx(classes.root)}>
      <Box className={clsx(isViewTransitChart ? classes.viewBackground : classes.background)} />
      <Container>
        {isViewTransitChart ? (
          <ViewSynastryChart />
        ) : (
          <CreateSynastryChart onViewSynastryChart={handleCreateChart} />
        )}
      </Container>
    </Box>
  );
};

export default SynastryChart;

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundPosition: "left calc(50% + 40px) top 220px",
    backgroundSize: "1368px auto",
    background: `no-repeat url(${ImageAssets.TransitChartGalaxyImage})`,
  },
  viewBackground: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    background: `no-repeat center center / 1590px auto url(${ImageAssets.ViewSynastryChartBackground})`,
    animation: "zoom-in-zoom-out 7s linear infinite",
    animationPlayState: "paused",

    "&:hover": {
      animationPlayState: "running",
    },
  },
}));
