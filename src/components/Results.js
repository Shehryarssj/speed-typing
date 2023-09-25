import { motion } from "framer-motion";
import { formatPercentage } from "../utils/helpers";

const initial = { opacity: 0 };
const animate = { opacity: 1 };
const duration = { duration: 0.3 };

function Results({ state, errors, accuracyPercentage, total, className }) {
  if (state !== "finish") {
    return null;
  }
  return (
    <motion.ul
      className={`flex flex-col items-center text-primary-400 spece-y-3 ${className}`}
    >
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.3 }}
        className="text-xl font-semibold"
      >
        Results
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}
      >
        Accuracy: {formatPercentage(100)}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.7 }}
        className="text-red-500"
      >
        Errors: {errors}
      </motion.li>
      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.9 }}
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
}

export default Results;
