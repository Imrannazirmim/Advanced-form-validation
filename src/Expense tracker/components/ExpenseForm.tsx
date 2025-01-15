import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";


const schema = z.object({
  description: z.string().min(3, {message: 'description should be 3 character'}).max(100),
  amount: z.number({invalid_type_error: 'amount is required'}).min(0.01).max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({message: 'category is required'})
  })
});


type ExpenseFormData = z.infer<typeof schema>
interface Props {
  onSubmit: (data: ExpenseFormData) => void
}
const ExpenseForm = ({onSubmit}: Props) => {
  const {register, reset, handleSubmit, formState: {errors}} = useForm<ExpenseFormData>({resolver: zodResolver(schema)})
  return (
    <>
      <form className="m-3" onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset()
      })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <input
          {...register('description')}
            type="text"
            id="description"
            placeholder="enter description"
            className="form-control"
          />
          {errors.description && <p className="text-danger">{errors.description.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount:
          </label>
          <input
          {...register('amount', {valueAsNumber: true})}
            type="number"
            className="form-control"
            id="amount"
            placeholder="enter amount"
          />
          {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
        </div>
        <div>
          <label htmlFor="category">Select Category</label>
          <select {...register('category')} id="category" className="form-select">
            <option value=""></option>
            {categories.map((category) => {
              return <option value={category} key={category}>{category}</option>;
            })}
          </select>
          {errors.category && <p className="text-danger">{errors.category.message}</p>}
        </div>
        <div className="mt-3">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};
export default ExpenseForm;
