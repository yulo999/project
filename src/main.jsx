import { useState } from "react";
import "./Main.css";

const Main = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Mike", salary: 1000, isPromoted: false, hasBonus: false },
    { id: 2, name: "Jack", salary: 1200, isPromoted: false, hasBonus: false },
    { id: 3, name: "John", salary: 800, isPromoted: false, hasBonus: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  const [newName, setNewName] = useState("");
  const [newSalary, setNewSalary] = useState("");

  const addEmployee = (e) => {
    e.preventDefault();
    if (newName.trim() === "" || newSalary.trim() === "") return;

    const newEmp = {
      id: Date.now(),
      name: newName,
      salary: parseInt(newSalary, 10),
      isPromoted: false,
      hasBonus: false,
    };

    setEmployees([...employees, newEmp]);
    setNewName("");
    setNewSalary("");
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };
  const toggleBonus = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, hasBonus: !emp.hasBonus } : emp,
      ),
    );
  };

  const searchEmployee = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase()),
    );
  };

  const filterEmployees = (items, filterType) => {
    switch (filterType) {
      case "promoted":
        return items.filter((item) => item.isPromoted);
      case "salaryMore1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const visibleEmployees = filterEmployees(
    searchEmployee(employees, searchTerm),
    filter,
  );
  const bonusCount = employees.filter((emp) => emp.hasBonus).length;
  return (
    <div className="app-container">
      <div className="app-info block-style">
        <h1>Учет сотрудников компании №</h1>
        <h2>Общее число сотрудников: {employees.length}</h2>
        <h2>Премию получат: {bonusCount}</h2>
      </div>

      <div className="search-panel block-style">
        <input
          type="text"
          className="search-input"
          placeholder="Найти сотрудника"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="btn-group">
          <button
            className={`btn ${filter === "all" ? "btn-light" : "btn-outline-light"}`}
            onClick={() => setFilter("all")}
          >
            Все сотрудники
          </button>
          <button
            className={`btn ${filter === "salaryMore1000" ? "btn-light" : "btn-outline-light"}`}
            onClick={() => setFilter("salaryMore1000")}
          >
            З/П больше 1000$
          </button>
        </div>
      </div>
      <ul className="employee-list">
        {visibleEmployees.map((emp) => (
          <li key={emp.id} className="list-group-item">
            <span
              className={`employee-name ${emp.isPromoted ? "promoted-text" : ""}`}
              onClick={() => togglePromotion(emp.id)}
            >
              {emp.name}
            </span>

            <div className="employee-controls">
              <input
                type="text"
                className="employee-salary"
                defaultValue={emp.salary + "$"}
                readOnly
              />
              <div className="action-buttons">
                <button
                  className={`btn-icon ${emp.hasBonus ? "bonus-active" : ""}`}
                  onClick={() => toggleBonus(emp.id)}
                >
                  *
                </button>
                <button
                  className="btn-icon delete"
                  onClick={() => deleteEmployee(emp.id)}
                >
                  удалить
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="employee-add-form block-style">
        <h3>Добавьте нового сотрудника</h3>
        <form onSubmit={addEmployee} className="add-form">
          <input
            type="text"
            placeholder="Как его зовут?"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="number"
            placeholder="З/П в $?"
            value={newSalary}
            onChange={(e) => setNewSalary(e.target.value)}
          />
          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    </div>
  );
};
export default Main;
