import React, { memo, useMemo } from "react";
import DeskCard from "./DeskCard";
import { Box, Grid, Stack, StackProps } from "@mui/material";
import { ObjectMultiLanguageProps } from "models";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import { AppConstant, PathConstant } from "const";
import { useMobile } from "hooks";
import { ThemeProps } from "models/types";

const DeskCardList = (props: StackProps) => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const navigate = useNavigate();
  const isMobile = useMobile();

  const cardList = useMemo(() => getCardList(getLabel), [getLabel]);

  const handleView = (id: string | number, typeSuit: string) => {
    const path = PathConstant.TAROT_CARD_MEANING + "/" + id;
    navigate(path, { state: { id: typeSuit } });
  };

  return (
    <Stack alignItems="center" {...props}>
      {isMobile ? (
        <Box className={classes.wrapper}>
          {cardList.map((item, index) => (
            <Grid item key={index}>
              <DeskCard onClickView={() => handleView(item.id, item.type)} name={item.name} />
            </Grid>
          ))}
        </Box>
      ) : (
        <>
          <DeskCard
            onClickView={() => handleView(cardList[0].id, cardList[0].type)}
            name={cardList[0].name}
          />
          <Box className={classes.wrapper}>
            {cardList.slice(1).map((item, index) => (
              <Grid xs={6} item key={index}>
                <DeskCard onClickView={() => handleView(item.id, item.type)} name={item.name} />
              </Grid>
            ))}
          </Box>
        </>
      )}
    </Stack>
  );
};

export default memo(DeskCardList);

const getCardList = (getLabel: (key: string, obj: object) => ObjectMultiLanguageProps) => {
  const objContent = getLabel("objCardName", { returnObjects: true });
  return [
    {
      id: AppConstant.DESK_CARD.lTheMajorArcana,
      name: objContent.lTheMajorArcana,
      type: AppConstant.SUIT_TYPE.majorArcana,
    },
    {
      id: AppConstant.DESK_CARD.lTheSuitOfCups,
      name: objContent.lTheSuitOfCups,
      type: AppConstant.SUIT_TYPE.cups,
    },
    {
      id: AppConstant.DESK_CARD.lTheSuitOfWands,
      name: objContent.lTheSuitOfWands,
      type: AppConstant.SUIT_TYPE.wands,
    },
    {
      id: AppConstant.DESK_CARD.lTheSuitOfSwords,
      name: objContent.lTheSuitOfSwords,
      type: AppConstant.SUIT_TYPE.swords,
    },
    {
      id: AppConstant.DESK_CARD.lTheSuitOfPentacles,
      name: objContent.lTheSuitOfPentacles,
      type: AppConstant.SUIT_TYPE.pentacles,
    },
  ];
};

const useStyles = makeStyles((theme: ThemeProps) => ({
  wrapper: {
    marginTop: 160,
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    rowGap: 160,
    columnGap: 250,

    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(1,1fr)",
      rowGap: 16,
      columnGap: 0,
      marginTop: 0,
    },
  },
}));
