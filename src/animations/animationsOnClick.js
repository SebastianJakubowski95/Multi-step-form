import { cubicBezier } from "framer-motion";

export const animationsOnClick = (name) => {
  switch (name) {
    case "changeTerm":
      return [
        { opacity: [0, 1] },
        { delay: 0.2 },
        { duration: 1 },
        { ease: cubicBezier(0.76, 0, 0.24, 1) },
      ];
  }
};
