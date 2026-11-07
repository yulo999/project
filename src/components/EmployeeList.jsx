import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ data, onTogglePromotion, onToggleBonus, onDelete }) => {
  return (
    <ul className="employee-list">
      {data.map((emp) => (
        <EmployeeListItem
          key={emp.id}
          name={emp.name}
          salary={emp.salary}
          isPromoted={emp.isPromoted}
          hasBonus={emp.hasBonus}
          onTogglePromotion={() => onTogglePromotion(emp.id)}
          onToggleBonus={() => onToggleBonus(emp.id)}
          onDelete={() => onDelete(emp.id)}
        />
      ))}
    </ul>
  );
};

export default EmployeeList;