import ExpenseList from "./Expense tracker/components/ExpenseList.tsx";
import { useState } from "react";
import ExpenseFilter from "./Expense tracker/components/ExpenseFilter.tsx";
import ExpenseForm from "./Expense tracker/components/ExpenseForm.tsx";
import categories from "./Expense tracker/categories.ts";


 
const expenseData = [
  { id: 1, description: "aaa", amount: 22, category: "Groceries" },
  { id: 2, description: "bbbb", amount: 44, category: "Utilities" },
  { id: 3, description: "nnnn", amount: 66, category: "Groceries" },
];
const App = () => {
  const [expenses, setExpenses] = useState(expenseData);
  const [selectCategory, setSelectCategory] = useState("");

  const visibleCategory = selectCategory
    ? expenses.filter((e) => e.category === selectCategory)
    : expenses;

  return (
    <div>
      <div className="m-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}]) }/>
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectCategory(category)}
      />
      <ExpenseList
        expenses={visibleCategory}
        onDelete={(id) =>
          setExpenses(expenses.filter((expense) => expense.id !== id))
        }
      />
    </div>
  );
};
export default App;
