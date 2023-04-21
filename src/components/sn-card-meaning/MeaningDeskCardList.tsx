import React, { useMemo } from "react";
import MeaningCard from "./MeaningCard";
import { Box, Stack } from "@mui/material";
import { ImageAssets } from "assets";
import { makeStyles } from "@mui/styles";
import MeaningDeskCardListTitle from "./MeaningDeskCardListTitle";
import { useNavigate, useParams } from "react-router-dom";
import { PathConstant } from "const";
import { useTranslation } from "react-i18next";
import { ObjectMultiLanguageProps } from "models";

const MeaningDeskCardList = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const params = useParams();
  const { t: getLabel } = useTranslation();

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
      <Stack mt={11.5} direction="row" justifyContent="center" spacing={17}>
        {CARD_ARR.slice(0, 2).map((item, index) => (
          <MeaningCard
            onReadMeaning={() => handleReadMeaning(item.id)}
            key={index}
            description={item.description}
            cardBackground={item.url}
          />
        ))}
      </Stack>
      <Box className={classes.wrapper}>
        {CARD_ARR.slice(2).map((item, index) => (
          <MeaningCard
            onReadMeaning={() => handleReadMeaning(item.id)}
            key={index}
            description={item.description}
            cardBackground={item.url}
          />
        ))}
      </Box>
    </Stack>
  );
};

const CARD_ARR = [
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
  {
    id: 1,
    url: ImageAssets.DemoDailyCard,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.",
  },
];

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
