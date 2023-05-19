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
    <Stack
      spacing={{ xs: 2, sm: 6.75, lg: 4.5 }}
      alignItems={{ xs: "center", lg: "flex-start" }}
      direction={{ xs: "column", lg: "row" }}
    >
      <ImageSlide
        onChooseData={setDataIndex}
        dataSelected={data}
        data={listData as [any]}
        onNextImg={handleNextImage}
        onPreImg={handlePreImage}
      />
      <Stack
        spacing={2}
        zIndex={1}
        alignItems={{ xs: "flex-start", sm: "center", lg: "flex-start" }}
      >
        <Typography className={classes.name}>{getLabel("lCardName")}</Typography>
        <Box className={classes.borderBox} />
        <Typography className={classes.price}>{PRICE}</Typography>
        <Stack spacing={1}>
          <Typography fontWeight={500}>{getLabel("lDescription")}</Typography>
          <Typography className={classes.desc}>{getLabel("lCardDescription1")}</Typography>
          <Typography className={classes.desc}>{getLabel("lCardDescription2")}</Typography>
          <Stack>
            <Typography className={classes.desc}>{getLabel("lCardDescription3")}</Typography>
            <Typography className={classes.desc}>{getLabel("lCardDescription4")}</Typography>
            <Typography className={classes.desc}>{getLabel("lCardDescription5")}</Typography>
            <Typography className={classes.desc}>{getLabel("lCardDescription6")}</Typography>
          </Stack>
        </Stack>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
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

const PRICE = "249.000 VNĐ";

const MOCK_DATA_LIST = [
  {
    id: 0,
    url: ImageAssets.Shop1Image,
  },
  {
    id: 1,

    url: ImageAssets.Shop2Image,
  },
  {
    id: 2,

    url: ImageAssets.Shop3Image,
  },
  {
    id: 3,
    url: ImageAssets.Shop4Image,
  },
  {
    id: 4,
    url: ImageAssets.Shop5Image,
  },
];

export default memo(SlideShow);

const useStyles = makeStyles((theme: ThemeProps) => ({
  name: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      lineHeight: "24px",
    },
  },
  borderBox: {
    background: theme.palette.gradient.main,
    height: 3,
    width: 133,
    zIndex: 1,
  },
  price: {
    fontWeight: 700,
    fontSize: 22,
    lineHeight: "30px",
    zIndex: 1,

    [theme.breakpoints.down("sm")]: {
      fontSize: 14,
      lineHeight: "22px",
    },
  },
  desc: {
    fontSize: 14,
    lineHeight: "22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
      lineHeight: "20px",
    },
  },
  tiktokButton: {
    "&,&:hover": {
      minWidth: 213,
      minHeight: 50,
      fontSize: 16,
      padding: "4px 16px",
      backgroundColor: "#0C0C0C",
      color: theme.palette.common.white,
      borderRadius: 15,
      textTransform: "unset",

      [theme.breakpoints.down("lg")]: {
        minWidth: 230,
      },
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
