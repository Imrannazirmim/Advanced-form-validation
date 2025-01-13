import { number, z} from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import {FieldValues, useForm} from 'react-hook-form'

const schema = z.object({
    name:z.string().min(4, {message: 'Name must be 4 character'}),
    age: z.number({invalid_type_error: 'Age is required'}).min(18, {message: 'Age must be 18'})
});
type FormData = z.infer<typeof schema>


const FormZod = () => {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<FormData>({resolver: zodResolver(schema)});
    const onSubmit = (data: FieldValues) => console.log(data);
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' placeholder='enter your name' {...register('name')} />
                {errors.name && <p>{errors.name.message}</p>}
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id='age' placeholder='enter your age' {...register('age', {valueAsNumber: true})} />
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <button type='submit' disabled={!isValid}>Submit</button>
        </form>
    </div>
  )
}
export default FormZod