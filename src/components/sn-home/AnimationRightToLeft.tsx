import { JSXElementConstructor, ReactElement } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { StarsAnimation } from "assets/animations";

const options = {
  animationData: StarsAnimation,
};

const AnimationRightToLeft = () => {
  const lottieObj = useLottie(options);
  const Animation: ReactElement<any, string | JSXElementConstructor<any>> = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.4],
        type: "stop",
        frames: [1],
      },
      {
        visibility: [0.4, 0.6],
        type: "seek",
        frames: [1, 60],
      },
    ],
  });

  return Animation;
};

export default AnimationRightToLeft;
