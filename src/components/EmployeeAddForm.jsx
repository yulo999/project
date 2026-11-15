import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  newName: z.string().min(2, "Слишком короткое имя"),
  newSalary: z.coerce.number().min(100, "Что так мало? Давай от 100$"),
});

const EmployeeAddForm = ({ onAdd }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    onAdd(data);
    reset();
  };

  return (
    <div className="app-info block-style">
      <h2>Добавьте нового сотрудника</h2>
      <form className="add-form" onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="text"
            placeholder="Как его зовут?"
            {...register("newName")}
          />
          {errors.newName && (
            <span style={{ color: "#ff6b6b", fontSize: "12px", marginTop: "5px" }}>
              {errors.newName.message}
            </span>
          )}
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            type="number"
            placeholder="З/П в $?"
            {...register("newSalary")}
          />
          {errors.newSalary && (
            <span style={{ color: "#ff6b6b", fontSize: "12px", marginTop: "5px" }}>
              {errors.newSalary.message}
            </span>
          )}
        </div>

        <button type="submit" className="btn btn-outline-light">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default EmployeeAddForm;
