import { T } from "../../styles/tokens";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
};

export const Input = ({ value, onChange, placeholder }: Props) => (
  <input
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    style={{
      width: "100%",
      background: T.surface,
      border: `1px solid ${T.border}`,
      color: T.text,
      borderRadius: 8,
      padding: "8px 10px",
    }}
  />
);
