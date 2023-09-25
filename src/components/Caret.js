import { motion } from "framer-motion";

function Caret() {
  return (
    <motion.div
      aria-hiden={true}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      className="inline-block bg-primary-500 w-0.5 h-7 rounded-sm"
    />
  );
}

export default Caret;
