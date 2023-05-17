import React, { memo, useEffect, useMemo, useState } from "react";
import TarotCard from "./TarotCard";
import { makeStyles } from "@mui/styles";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { ImageAssets } from "assets";
import { SealBackGroundButton } from "components/common";
import { useTranslation } from "react-i18next";
import { ApiConstant, AppConstant, PathConstant } from "const";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppSelector } from "redux-store";
import { ThemeProps } from "models/types";
import { useMobile, useResponsive } from "hooks";
import clsx from "clsx";
import StringFormat from "string-format";

const TarotCardList = ({ className, ...otherProps }: BoxProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t: getLabel } = useTranslation();
  const isTablet = useResponsive("between", "sm", "lg");
  const isMobile = useMobile();

  const cardList = useSelector(AppSelector.getSuitList);

  const [itemSelected, setItemSelected] = useState<any>({});
  const [isShowTarot, setIsShowTarot] = useState(false);
  const [srcImage, setSrcImage] = useState("");

  const numberMargin = useMemo(() => {
    if (isTablet) return -140;
    if (isMobile) return -100;
    return -220;
  }, [isTablet, isMobile]);

  const handleViewTarot = () => {
    // TODO: update redirect card detail
    navigate(PathConstant.DAILY_TAROT + "/" + itemSelected?.id);
    return;
  };

  const handleClickCard = async (item: any) => {
    const image = StringFormat(ApiConstant.URL_IMAGE_ID, { id: item?.id });
    loadImage(image);

    setSrcImage(image);

    setItemSelected(item);
  };

  useEffect(() => {
    if (Object.keys(itemSelected).length) {
      setTimeout(() => {
        setIsShowTarot(true);
      }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND * 2);
    } else setIsShowTarot(false);
  }, [itemSelected]);

  return (
    <Box className={clsx(classes.root, className)} {...otherProps}>
      <Stack direction="row" justifyContent="center">
        {Object.keys(itemSelected).length ? (
          <Stack width="100%" alignItems="center">
            <Stack direction="row" className={classes.itemSelectedWrapper}>
              <TarotCard
                className={classes.collapseCardList}
                onClick={() => setItemSelected("")}
                cardBackground={ImageAssets.TarotCardListDailyBackground}
              />
              <TarotCard
                isShowFront={isShowTarot}
                className={classes.cardSelected}
                cardFront={srcImage}
              />
            </Stack>
            <Typography className={classes.cardInfo}>{itemSelected?.card_name}</Typography>
            <SealBackGroundButton
              mt={{ xs: 0, sm: 1, lg: 3 }}
              labelButton={getLabel("lGetMyReading")}
              onClickAction={handleViewTarot}
            />
          </Stack>
        ) : (
          <>
            {cardList?.map((item, index) => (
              <Box
                key={index}
                className={classes.cardWrapper}
                sx={{
                  zIndex: index + 1,
                  marginLeft: index && `${numberMargin}px`,
                }}
                onClick={() => handleClickCard(item)}
              >
                <TarotCard />
              </Box>
            ))}
          </>
        )}
      </Stack>
    </Box>
  );
};

export const loadImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = url;
  });
};

export default memo(TarotCardList);

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    width: "100%",
  },
  cardWrapper: {
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    "&:hover": {
      transform: "translateY(-40px)",

      [theme.breakpoints.down("lg")]: {
        transform: "translateY(-30px)",
      },
      [theme.breakpoints.down("sm")]: {
        transform: "translateY(-17px)",
      },
    },
  },
  itemSelectedWrapper: {
    position: "relative",
    justifyContent: "center",
    width: "100%",
  },
  collapseCardList: {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",

    [theme.breakpoints.down("sm")]: {
      width: 81,
      height: 114,
    },
  },
  cardSelected: {
    width: 321,
    height: 450,

    [theme.breakpoints.down("lg")]: {
      width: 200,
      height: 300,
    },
    [theme.breakpoints.down("sm")]: {
      width: 151,
      height: 268,
    },
  },
  cardInfo: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    marginTop: 12,

    [theme.breakpoints.down("lg")]: {
      fontSize: 17,
      lineHeight: "24px",
      marginTop: 4,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      lineHeight: "20px",
    },
  },
}));
