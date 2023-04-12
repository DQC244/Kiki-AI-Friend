import React from "react";
import { Container } from "@mui/material";
import { CreateBirthChart } from "components/sn-chart";
import { makeStyles } from "@mui/styles";
import { HEADER_HEIGHT_IN_PX } from "layouts/MainLayout/components/MLHeader";
import { FOOTER_HEIGHT_IN_PX } from "layouts/MainLayout/components/Footer";
import clsx from "clsx";

const BirthChart = () => {
  const classes = useStyles();

  return (
    <Container className={clsx("center-root", classes.root)}>
      <CreateBirthChart />
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
