// import {FormEvent, useRef, useState} from "react";
import { useForm } from "react-hook-form";
interface FormData {
  name: string;
  age: number;
}
const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const [person, setPerson] = useState({
  //     name: '',
  //     age: '',
  // })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log(data);

  // const person = { name: "", age: 0 };
  // const handleFormSubmit = (event: FormEvent) => {
  //     event.preventDefault();
  //     if (nameRef.current !== null) {
  //         person.name = nameRef.current.value;
  //     }
  //     if (ageRef.current !== null) {
  //         person.age = Number(ageRef.current.value);
  //     }
  //     console.log(person);

  // };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3 p-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          type="text"
          id="name"
          className="form-control"
          placeholder="enter your name"          

          // ref={nameRef}

          // value={person.name}
          // onChange={(event) => setPerson({...person, name: event.target.value})}
        />
        {errors.name?.type === "required" && <p>This field is required</p>}
        {errors.name?.type === "minLength" && (
          <p>This field must be 3 character</p>
        )}
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          placeholder="enter your age"
          {...register("age", { required: true, minLength: 6 })}
          // ref={ageRef}
          // value={person.age}
          // onChange={(event) => setPerson({...person, age: (event.target.value)})}
        />
        {errors.age?.type === "minLength" && <p>Must be minimum 6 character</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Form;
