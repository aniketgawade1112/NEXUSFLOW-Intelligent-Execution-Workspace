import { motion, AnimatePresence } from "framer-motion";

type Props = {
  message: string | null;
};

export function NotificationToast({ message }: Props) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            background: "#111118",
            border: "1px solid #F59E0B44",
            color: "#F59E0B",
            padding: "10px 14px",
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            zIndex: 9999,
          }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
