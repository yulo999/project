const EmployeeListItem = ({ name, salary, isPromoted, hasBonus, onTogglePromotion, onToggleBonus, onDelete }) => {
  return (
    <li className="list-group-item">
      <span
        className={`employee-name ${isPromoted ? "promoted-text" : ""}`}
        onClick={onTogglePromotion}
      >
        {name}
      </span>

      <div className="employee-controls">
        <input
          type="text"
          className="employee-salary"
          defaultValue={salary + "$"}
          readOnly
        />
        <div className="action-buttons">
          <button
            className={`btn-icon ${hasBonus ? "bonus-active" : ""}`}
            onClick={onToggleBonus}
          >
            *
          </button>
          <button
            className="btn-icon delete"
            onClick={onDelete}
          >
            удалить
          </button>
        </div>
      </div>
    </li>
  );
};

export default EmployeeListItem;