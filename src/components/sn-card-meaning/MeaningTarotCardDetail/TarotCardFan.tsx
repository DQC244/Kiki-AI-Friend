import React, { memo, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TarotCard } from "components/sn-daily-tarot";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "models/types";
import { useNavigate } from "react-router-dom";
import { PathConstant } from "const";
let timer: ReturnType<typeof setInterval> = setInterval(() => "", 2000);

const TarotCardFan = () => {
  const classes = useStyles();
  const { t: getLabel } = useTranslation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(1);
  const [idCard, setIdCard] = useState<Array<number>>([]);

  useEffect(() => {
    const idCardClone = [...idCard];
    const index = idCardClone.indexOf(order);
    if (index > -1) {
      idCardClone.splice(index, 1);
    } else idCardClone.push(order);

    setIdCard([...idCardClone]);
  }, [order]);

  useEffect(() => {
    timer = setInterval(() => {
      setOrder((preOrder) => {
        if (CARD_ID.eighth === preOrder) return CARD_ID.first;
        else return preOrder + 1;
      });
    }, 2000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box className={classes.root}>
      <Button
        className={classes.button}
        onClick={() => {
          navigate(PathConstant.DAILY_TAROT);
        }}
      >
        {getLabel("lPickTodayTarotCard")}
      </Button>
      <Box className={classes.wrapper}>
        {CARD_LIST.map((item, index) => (
          <Box className={classes.card} key={index}>
            <TarotCard
              isShowFront={idCard.includes(item.id)}
              className={classes.innerCard}
              key={index}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

enum CARD_ID {
  first = 1,
  second,
  third,
  fourth,
  fifth,
  sixth,
  seventh,
  eighth,
}

export default memo(TarotCardFan);

const CARD_LIST = [
  { id: CARD_ID.first },
  { id: CARD_ID.second },
  { id: CARD_ID.third },
  { id: CARD_ID.fourth },
  { id: CARD_ID.fifth },
  { id: CARD_ID.sixth },
  { id: CARD_ID.seventh },
  { id: CARD_ID.eighth },
];

const useStyles = makeStyles((theme: ThemeProps) => ({
  root: {
    position: "relative",
    width: 900,
    height: 900,
  },
  wrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  innerCard: {
    width: "100%",
    height: "100%",
  },
  card: {
    width: "150px",
    height: "250px",
    position: "absolute",
    "&:nth-child(1)": {
      transform: "rotate(50deg) translateY(-300px)",
    },
    "&:nth-child(2)": {
      transform: "rotate(95deg) translateY(-300px)",
    },
    "&:nth-child(3)": {
      transform: "rotate(140deg) translateY(-300px)",
    },
    "&:nth-child(4)": {
      transform: "rotate(185deg) translateY(-300px)",
    },
    "&:nth-child(5)": {
      transform: "rotate(230deg) translateY(-300px)",
    },
    "&:nth-child(6)": {
      transform: "rotate(275deg) translateY(-300px)",
    },
    "&:nth-child(7)": {
      transform: "rotate(320deg) translateY(-300px)",
    },
    "&:nth-child(8)": {
      transform: "rotate(5deg) translateY(-300px)",
    },
  },
  button: {
    "&:hover,&": {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      color: theme.palette.common.white,
      minHeight: 52,
      padding: "10px 24px",
      background: "#9AA2FF",
      borderRadius: 15,
      zIndex: 10,
    },
  },
}));
