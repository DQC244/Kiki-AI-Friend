/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { CreateSynastryChart, ViewTransitChart } from "components/sn-chart";
import clsx from "clsx";

const SynastryChart = () => {
  const classes = useStyles();
  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    setIsViewTransitChart(true);
    console.log(data);
  };

  return (
    <Box className={clsx(classes.root, !isViewTransitChart && classes.background)}>
      <Container>
        {isViewTransitChart ? (
          <ViewTransitChart />
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
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
  background: {
    backgroundPosition: "left calc(50% + 40px) top 220px",
    backgroundSize: "1368px auto",
    background: `no-repeat url(${ImageAssets.TransitChartGalaxyImage})`,
  },
}));
