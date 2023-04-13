import React, { useState } from "react";
import { Container } from "@mui/material";
import { CreateBirthChart, ViewBirthChart } from "components/sn-chart";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import clsx from "clsx";
/* eslint-disable  @typescript-eslint/no-explicit-any */

const BirthChart = () => {
  const classes = useStyles();
  const [isViewBirthChart, setIsViewBirthChart] = useState(false);

  const handleCreateBirthChart = (data: any) => {
    // TODO: update when implement api
    console.log(data);
    setIsViewBirthChart(true);
  };

  return (
    <Container className={clsx("center-root", classes.root)}>
      {isViewBirthChart ? (
        <ViewBirthChart />
      ) : (
        <CreateBirthChart onCreateBirthChart={handleCreateBirthChart} />
      )}
    </Container>
  );
};

export default BirthChart;

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
    minHeight: `calc(100vh - ${HEADER_HEIGHT_IN_PX + FOOTER_HEIGHT_IN_PX}px)`,
  },
}));