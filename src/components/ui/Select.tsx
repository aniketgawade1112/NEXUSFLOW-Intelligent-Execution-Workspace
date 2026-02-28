import type { CSSProperties } from "react";
import { T } from "../../styles/tokens";

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  style?: CSSProperties;
};

export const Select = ({ value, onChange, options, style }: Props) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      background: T.surface,
      border: `1px solid ${T.border}`,
      color: T.text,
      borderRadius: 8,
      padding: "8px 10px",
      ...style,
    }}
  >
    {options.map((o) => (
      <option key={o.value} value={o.value}>
        {o.label}
      </option>
    ))}
  </select>
);
