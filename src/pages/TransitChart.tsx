import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ImageAssets } from "assets";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import { CreateTransitChart, ViewTransitChart } from "components/sn-chart";
import clsx from "clsx";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const TransitChart = () => {
  const classes = useStyles();

  const [isViewTransitChart, setIsViewTransitChart] = useState(false);

  const handleCreateChart = (data: any) => {
    setIsViewTransitChart(true);
    console.log(data);
  };

  return (
    <Box className={clsx(classes.root, !isViewTransitChart && classes.background)}>
      <Container className={classes.container}>
        {isViewTransitChart ? (
          <ViewTransitChart />
        ) : (
          <CreateTransitChart onCreateChart={handleCreateChart} />
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
