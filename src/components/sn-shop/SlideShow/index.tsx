/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { memo, useEffect, useMemo, useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { ThemeProps } from "models/types";
import { useTranslation } from "react-i18next";
import { ImageAssets } from "assets";
import clsx from "clsx";
import ImageSlide from "./ImageSlide";

const SlideShow = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();

  const [listData, setListData] = useState<Array<any>>([]);
  const [dataIndex, setDataIndex] = useState<any>(0);

  const data = useMemo(() => {
    const totalDataLength = listData.length;
    if (totalDataLength) {
      if (dataIndex < 0) {
        return listData[totalDataLength - 1];
      } else if (dataIndex >= totalDataLength) return listData[0];
      else return listData[dataIndex];
    }
    return {};
  }, [dataIndex, listData]);

  const handleNextImage = () => {
    if (dataIndex >= listData.length - 1) {
      setDataIndex(0);
    } else {
      setDataIndex(dataIndex + 1);
    }
  };
  const handlePreImage = () => {
    if (dataIndex <= 0) {
      setDataIndex(listData.length - 1);
    } else {
      setDataIndex(dataIndex - 1);
    }
  };

  useEffect(() => {
    setListData(MOCK_DATA_LIST);
  }, [MOCK_DATA_LIST]);

  return (
    <Stack spacing={4.5} direction="row">
      <ImageSlide
        onChooseData={setDataIndex}
        dataSelected={data}
        data={listData as [any]}
        onNextImg={handleNextImage}
        onPreImg={handlePreImage}
      />
      <Stack spacing={2}>
        <Typography className={classes.name}>{data?.name}</Typography>
        <Box className={classes.borderBox} />
        <Typography className={classes.price}>{data?.price}</Typography>
        <Typography fontWeight={500}>{getLabel("lDescription")}</Typography>
        <Typography fontSize={14} lineHeight="22px">
          {data?.desc}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            className={classes.tiktokButton}
            startIcon={
              <Box component="img" src={ImageAssets.TiktokImage} className={classes.tiktokImg} />
            }
          >
            {getLabel("lBuyOnTikTokShop")}
          </Button>
          <Button
            className={clsx(classes.tiktokButton, classes.instagramButton)}
            startIcon={
              <Box component="img" src={ImageAssets.InstagramImage} className={classes.tiktokImg} />
            }
          >
            {getLabel("lInquireViaInstagram")}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

const MOCK_DATA_LIST = [
  {
    url: ImageAssets.ArrowButtonBackground,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "29.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    url: ImageAssets.AppDemoHomeBackground,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "49.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    url: ImageAssets.ViewSynastryChartBackground,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "24dsa9.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    url: ImageAssets.ViewSynastryChartBackground,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "9.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    url: ImageAssets.BackgroundChatBottomLeft,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "249.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
  {
    url: ImageAssets.BackgroundFooterChat,
    name: "The Tarot Of Kiki Friends: A 78-Card Deck and guide book",
    price: "249.000 VNĐ",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.",
  },
];

export default memo(SlideShow);

const useStyles = makeStyles((theme: ThemeProps) => ({
  name: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
  },
  borderBox: {
    background: theme.palette.gradient.main,
    height: 3,
    width: 133,
  },
  price: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
  },
  tiktokButton: {
    "&,&:hover": {
      minWidth: 213,
      minHeight: 50,
      padding: "4px 16px",
      backgroundColor: "#0C0C0C",
      color: theme.palette.common.white,
      borderRadius: 15,
      textTransform: "unset",
    },
  },
  tiktokImg: {
    width: 30,
    height: 30,
  },
  instagramButton: {
    background:
      "linear-gradient(92.32deg, #5B4FE9 1.79%, #8F39CE 20.36%, #D53692 34.2%, #F75274 49.64%, #F86C68 69.67%, #FCBB45 97.55%)",
  },
}));
