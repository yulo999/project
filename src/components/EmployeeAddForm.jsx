import { useForm } from "react-hook-form";

const EmployeeAddForm = ({ onAdd }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    onAdd(data);
    reset();
  };

  return (
    <div className="employee-add-form block-style">
      <h3>Добавьте нового сотрудника</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="add-form">
        <input
          type="text"
          placeholder="Как его зовут?"
          {...register("newName", { required: true })}
        />
        <input
          type="number"
          placeholder="З/П в $?"
          {...register("newSalary", { required: true })}
        />
        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeeAddForm;