import { AnimatePresence, motion } from "framer-motion";
import { T } from "../../../lib/constants";

export default function NotificationToast({ notification }: any) {
  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: T.surface,
            border: `1px solid ${T.warning}44`,
            padding: "12px 18px",
            borderRadius: 10,
          }}
        >
          {notification.msg}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
