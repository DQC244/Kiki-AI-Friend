import { JSXElementConstructor, ReactElement } from "react";
import { useLottie, useLottieInteractivity } from "lottie-react";
import { StartAnimation } from "assets/animations";

const options = {
  animationData: StartAnimation,
};

const AnimationRightToLeft = () => {
  const lottieObj = useLottie(options);
  const Animation: ReactElement<any, string | JSXElementConstructor<any>> = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.3],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.3, 1],
        type: "seek",
        frames: [0, 200],
      },
    ],
  });

  return Animation;
};

export default AnimationRightToLeft;
