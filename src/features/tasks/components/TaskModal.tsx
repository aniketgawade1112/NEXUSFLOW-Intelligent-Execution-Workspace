import { useState } from "react";
import { useUIStore } from "../../../store/useUIStore";

type Props = {
  onSave: (title: string) => void;
};

export const TaskModal = ({ onSave }: Props) => {
  const { closeModal } = useUIStore();
  const [title, setTitle] = useState("");

  return (
    <div style={{ position: "fixed", inset: 0, background: "#0008" }}>
      <div style={{ background: "#111", padding: 20 }}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />

        <button
          onClick={() => {
            onSave(title);
            closeModal();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
