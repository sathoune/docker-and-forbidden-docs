import { useEffect, useState } from "react";
import styles from "./Move.module.css";

export const useHead = () => {
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimation(`${styles["head-move-away"]} ${styles["animate-spin"]}`);
    }, 500);

    setTimeout(() => {
      setAnimation(styles["head-move-up"]);
    }, 2550);

    setTimeout(() => {
      setAnimation(styles["head-move-target"]);
    }, 3600);
  }, []);

  return animation;
};

export const useLeftArm = () => {
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimation(`${styles["left-arm-move-away"]} ${styles["animate-spin"]}`);
    }, 500);

    setTimeout(() => {
      setAnimation(styles["left-arm-move-up"]);
    }, 2550);

    setTimeout(() => {
      setAnimation(styles["left-arm-move-target"]);
    }, 3600);
  }, []);

  return animation;
};
export const useRightArm = () => {
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimation(
        `${styles["right-arm-move-away"]} ${styles["animate-spin"]}`
      );
    }, 500);

    setTimeout(() => {
      setAnimation(styles["right-arm-move-up"]);
    }, 2550);

    setTimeout(() => {
      setAnimation(styles["right-arm-move-target"]);
    }, 3600);
  }, []);

  return animation;
};
export const useLeftLeg = () => {
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimation(`${styles["left-leg-move-away"]} ${styles["animate-spin"]}`);
    }, 500);

    setTimeout(() => {
      setAnimation(styles["left-leg-move-up"]);
    }, 2550);

    setTimeout(() => {
      setAnimation(styles["left-leg-move-target"]);
    }, 3600);
  }, []);

  return animation;
};
export const useRightLeg = () => {
  const [animation, setAnimation] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setAnimation(
        `${styles["right-leg-move-away"]} ${styles["animate-spin"]}`
      );
    }, 500);

    setTimeout(() => {
      setAnimation(styles["right-leg-move-up"]);
    }, 2550);

    setTimeout(() => {
      setAnimation(styles["right-leg-move-target"]);
    }, 3600);
  }, []);

  return animation;
};
