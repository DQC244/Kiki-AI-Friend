import React, { useMemo } from "react";
import MeaningCard from "./MeaningCard";
import { Box, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MeaningDeskCardListTitle from "./MeaningDeskCardListTitle";
import { useNavigate, useParams } from "react-router-dom";
import { ApiConstant, PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import { useResponsive } from "hooks";
import StringFormat from "string-format";
import { ThemeProps } from "models/types";

const MeaningDeskCardList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const { t: getLabel } = useTranslation();
  const isTablet = useResponsive("between", "md", "lg");

  const cardList = useSelector(AppSelector.getSuitList);

  const [firstCardList, secondCardList] = useMemo(() => {
    if (cardList.length) {
      if (isTablet) {
        return [cardList.slice(0, 1), cardList.slice(1)];
      }
      return [cardList.slice(0, 2), cardList.slice(2)];
    }

    return [[], []];
  }, [cardList, isTablet]);

  const title = useMemo(() => {
    const contentObj: ObjectMultiLanguageProps = getLabel("objCardName", { returnObjects: true });
    if (params.id) {
      return contentObj[`${params.id}`];
    }
    return "";
  }, [getLabel, params]);

  const handleReadMeaning = (id: string | number) => {
    const path = PathConstant.TAROT_CARD_MEANING + "/" + params.id + "/" + id;
    navigate(path);
  };

  return (
    <Stack alignItems="center">
      <MeaningDeskCardListTitle title={title} />
      {cardList.length > 2 && (
        <>
          <Stack
            mt={{ xs: 2, sm: 11.5 }}
            direction="row"
            justifyContent="center"
            spacing={{ xs: 8.25, sm: 17 }}
          >
            {firstCardList.map((item, index) => (
              <MeaningCard
                onReadMeaning={() => handleReadMeaning(item?.id)}
                key={index}
                description={item?.meaning}
                cardBackground={StringFormat(ApiConstant.URL_IMAGE_ID, { id: item?.id })}
              />
            ))}
          </Stack>
          <Box className={classes.wrapper}>
            {secondCardList.map((item, index) => (
              <MeaningCard
                onReadMeaning={() => handleReadMeaning(item?.id)}
                key={index}
                description={item?.meaning}
                cardBackground={StringFormat(ApiConstant.URL_IMAGE_ID, { id: item?.id })}
              />
            ))}
          </Box>
        </>
      )}
    </Stack>
  );
};

export default MeaningDeskCardList;

const useStyles = makeStyles((theme: ThemeProps) => ({
  logo: {
    width: 236,
    height: 236,
    marginTop: 30,
  },
  title: {
    fontWeight: 700,
    fontSize: 64,
    lineHeight: "68px",
    marginTop: 16,
  },
  wrapper: {
    display: "grid",
    gridTemplateColumns: "repeat(4,1fr)",
    rowGap: 72,
    columnGap: 110,
    marginTop: 72,

    [theme.breakpoints.down("lg")]: {
      gridTemplateColumns: "repeat(3,1fr)",
      columnGap: 36,
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(2,1fr)",
      columnGap: 66,
      rowGap: 16,
      marginTop: 16,
    },
  },
}));
