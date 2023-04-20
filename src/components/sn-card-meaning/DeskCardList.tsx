import React, { memo } from "react";
import DeskCard from "./DeskCard";
import { Stack, StackProps } from "@mui/material";

const DeskCardList = (props: StackProps) => {
  return (
    <Stack alignItems="center" {...props}>
      <DeskCard name="The Major Arcana" />
    </Stack>
  );
};

export default memo(DeskCardList);
