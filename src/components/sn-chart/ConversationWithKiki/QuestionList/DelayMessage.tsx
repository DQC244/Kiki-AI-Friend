import React, { useState, useEffect } from "react";
import { AppConstant } from "const";

type Props = {
  children: React.ReactNode;
  waitBeforeShow?: number;
};

const DelayMessage = ({
  children,
  waitBeforeShow = AppConstant.DEBOUNCE_TIME_IN_MILLISECOND,
}: Props) => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? <>{children}</> : <></>;
};

export default DelayMessage;
