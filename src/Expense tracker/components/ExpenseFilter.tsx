import categories from "../categories.ts";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="m-3">
      <select
        className=" form-select"
        onChange={(e) => onSelectCategory(e.target.value)}
        title="enter"
      >
        <option selected>All Category</option>
        {
          categories.map((category) => {
            return (
              <option value={category} key={category} >
                {category}
              </option>
            );
          })}
      </select>
    </div>
  );
};
export default ExpenseFilter;
