import React, { memo, useMemo } from "react";
import DeskCard from "./DeskCard";
import { Box, Grid, Stack, StackProps } from "@mui/material";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { AppConstant, PathConstant } from "const";

const DeskCardList = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const navigate = useNavigate();

  const cardList = useMemo(() => getCardList(getLabel), [getLabel]);

  const handleView = (id: string | number) => {
    const path = PathConstant.TAROT_CARD_MEANING + "/" + id;
    navigate(path);
  };

  return (
    <Stack alignItems="center" {...props}>
      <DeskCard onClickView={() => handleView(cardList[0].id)} name={cardList[0].name} />
      <Box className={classes.wrapper}>
        {cardList.slice(1).map((item, index) => (
          <Grid xs={6} item key={index}>
            <DeskCard onClickView={() => handleView(item.id)} name={item.name} />
          </Grid>
        ))}
      </Box>
    </Stack>
  );
};

export default memo(DeskCardList);

const getCardList = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objCardName", { returnObjects: true });
  return [
    { id: AppConstant.DESK_CARD.lTheMajorArcana, name: objContent.lTheMajorArcana },
    { id: AppConstant.DESK_CARD.lTheSuitOfCups, name: objContent.lTheSuitOfCups },
    { id: AppConstant.DESK_CARD.lTheSuitOfWands, name: objContent.lTheSuitOfWands },
    { id: AppConstant.DESK_CARD.lTheSuitOfSwords, name: objContent.lTheSuitOfSwords },
    { id: AppConstant.DESK_CARD.lTheSuitOfPentacles, name: objContent.lTheSuitOfPentacles },
  ];
};

const useStyles = makeStyles(() => ({
  wrapper: {
    marginTop: 160,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    rowGap: 160,
    columnGap: 212,
  },
}));
