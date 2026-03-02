import { motion } from "framer-motion";

type Item = {
  cat: string;
  total: number;
};

type Props = {
  data: Item[];
  total: number;
};

export function CategoryChart({ data, total }: Props) {
  return (
    <div>
      {data.map((c) => {
        const percentage = total > 0 ? (c.total / total) * 100 : 0;

        return (
          <div key={c.cat} style={{ marginBottom: 12 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 4,
              }}
            >
              <span>{c.cat}</span>
              <span>${c.total.toFixed(2)}</span>
            </div>

            <div
              style={{
                height: 6,
                background: "#1E1E2E",
                borderRadius: 4,
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 0.8 }}
                style={{
                  height: "100%",
                  background: "#6366F1",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
