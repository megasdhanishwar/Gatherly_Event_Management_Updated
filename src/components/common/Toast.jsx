import { motion } from "framer-motion";
import { Check } from "lucide-react";
export default function Toast({ message }) {
  return (
    <motion.div
      className="toast"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <span>
        <Check size={15} />
      </span>
      {message}
    </motion.div>
  );
}
