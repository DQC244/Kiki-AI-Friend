import React, { memo, useEffect, useState } from "react";
import TarotCard from "./TarotCard";
import { makeStyles } from "@mui/styles";
import { Box, BoxProps, Stack, Typography } from "@mui/material";
import { ImageAssets } from "assets";
import { SealBackGroundButton } from "components/common";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { AppConstant, PathConstant } from "const";
import { useNavigate } from "react-router-dom";

const TarotCardList = ({ className, ...otherProps }: BoxProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const { t: getLabel } = useTranslation();

  const [itemSelected, setItemSelected] = useState("");
  const [isShowTarot, setIsShowTarot] = useState(false);

  const handleViewTarot = () => {
    // TODO: update redirect card detail
    navigate(PathConstant.DAILY_TAROT + "/1");
    return;
  };

  useEffect(() => {
    if (itemSelected) {
      setTimeout(() => {
        setIsShowTarot(true);
      }, AppConstant.DEBOUNCE_TIME_IN_MILLISECOND);
    } else setIsShowTarot(false);
  }, [itemSelected]);

  return (
    <Box className={clsx(classes.root, className)} {...otherProps}>
      <Stack direction="row" justifyContent="center">
        {itemSelected ? (
          <Stack width="100%" alignItems="center">
            <Stack direction="row" className={classes.itemSelectedWrapper}>
              <TarotCard
                className={classes.collapseCardList}
                onClick={() => setItemSelected("")}
                cardBackground={ImageAssets.TarotCardListDailyBackground}
              />
              <TarotCard isShowFront={isShowTarot} className={classes.cardSelected} />
            </Stack>
            <Typography className={classes.cardInfo}>10 of cups</Typography>
            <SealBackGroundButton
              mt={3}
              labelButton={getLabel("lGetMyReading")}
              onClickAction={handleViewTarot}
            />
          </Stack>
        ) : (
          <>
            {MOCK_DATA.map((_, index) => (
              <Box
                key={index}
                className={classes.cardWrapper}
                sx={{
                  zIndex: index + 1,
                  marginLeft: index && "calc(-200px)",
                }}
                onClick={() => setItemSelected(index.toString())}
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

export default memo(TarotCardList);

const MOCK_DATA = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  cardWrapper: {
    transition: "all 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    "&:hover": {
      transform: "translateY(-40px)",
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
  },
  cardSelected: {
    width: 321,
    height: 450,
  },
  cardInfo: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: "32px",
    marginTop: 12,
  },
}));