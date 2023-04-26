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
import StringFormat from "string-format";

const MeaningDeskCardList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const { t: getLabel } = useTranslation();

  const cardList = useSelector(AppSelector.getSuitList);

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
          <Stack mt={11.5} direction="row" justifyContent="center" spacing={17}>
            {cardList.slice(0, 2).map((item, index) => (
              <MeaningCard
                onReadMeaning={() => handleReadMeaning(item?.id)}
                key={index}
                description={item?.meaning}
                cardBackground={StringFormat(ApiConstant.URL_IMAGE_ID, { id: item?.id })}
              />
            ))}
          </Stack>
          <Box className={classes.wrapper}>
            {cardList.slice(2).map((item, index) => (
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

const useStyles = makeStyles(() => ({
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
  },
}));
