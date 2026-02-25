import React, { useState } from "react";
import { animated, config, useTransition } from "react-spring";

const WordsFading = ({ variant = "light" }) => {
  const [toggle, set] = useState(false);
  const textClass =
    variant === "pill"
      ? "text-amber-900 font-semibold text-sm sm:text-base"
      : "text-white font-medium text-sm sm:text-base";
  // Transition Style
  const transitions = useTransition(toggle, {
    from: {
      position: "absolute",
      opacity: 0,
      top: 0,
      left: 0,
      margin: 0,
    },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    reverse: toggle,
    delay: 50,
    duration: 100,
    config: config.molasses,
    onRest: () => set(!toggle),
  });

  return transitions(
    ({ opacity }, item) =>
      item ? (
        <animated.div
          className={textClass}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: 0,
            opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
          }}
        >
          趣味教学
        </animated.div>
      ) : (
        <animated.div
          className={textClass}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            margin: 0,
            opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
          }}
        >
          AI伴学
        </animated.div>
      )
  );
};

export default WordsFading;
