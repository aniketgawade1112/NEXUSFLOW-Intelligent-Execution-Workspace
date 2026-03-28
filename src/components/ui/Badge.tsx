export default function Badge({ color, children, small }: any) {
  return (
    <span
      style={{
        background: color + "22",
        color,
        border: `1px solid ${color}44`,
        borderRadius: 4,
        padding: small ? "1px 6px" : "2px 8px",
        fontSize: small ? 10 : 11,
        fontWeight: 600,
      }}
    >
      {children}
    </span>
  );
}
