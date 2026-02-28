type Props = {
  search: string;
  setSearch: (v: string) => void;
};

export const TaskFilters = ({ search, setSearch }: Props) => {
  return (
    <input
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search tasks..."
      style={{ padding: 8, width: 250 }}
    />
  );
};
