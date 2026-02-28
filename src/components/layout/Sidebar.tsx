import { motion } from "framer-motion";
import { Icon } from "../ui/Icon";
import { T } from "../../styles/tokens";

type Props = {
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
};

export const Sidebar = ({ collapsed, setCollapsed }: Props) => {
  return (
    <motion.aside
      animate={{ width: collapsed ? 60 : 220 }}
      style={{
        background: T.surface,
        borderRight: `1px solid ${T.border}`,
        height: "100%",
      }}
    >
      <button onClick={() => setCollapsed(!collapsed)}>
        <Icon name="menu" />
      </button>
    </motion.aside>
  );
};
