import { useState } from "react";
import AppInfo from "./components/AppInfo";
import SearchPanel from "./components/SearchPanel";
import EmployeeList from "./components/EmployeeList";
import EmployeeAddForm from "./components/EmployeeAddForm";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: "Mike", salary: 1000, isPromoted: false, hasBonus: false },
    { id: 2, name: "Jack", salary: 1200, isPromoted: false, hasBonus: false },
    { id: 3, name: "John", salary: 800, isPromoted: false, hasBonus: false },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const addEmployee = (data) => {
    const newEmp = {
      id: Date.now(),
      name: data.newName,
      salary: parseInt(data.newSalary, 10),
      isPromoted: false,
      hasBonus: false,
    };
    setEmployees([...employees, newEmp]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const toggleBonus = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, hasBonus: !emp.hasBonus } : emp
      )
    );
  };

  const togglePromotion = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id ? { ...emp, isPromoted: !emp.isPromoted } : emp
      )
    );
  };

  const searchEmployee = (items, term) => {
    if (term.length === 0) return items;
    return items.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
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
    filter
  );
  const bonusCount = employees.filter((emp) => emp.hasBonus).length;

  return (
    <div className="app-container">
      <AppInfo employeesCount={employees.length} bonusCount={bonusCount} />
      
      <SearchPanel
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filter={filter}
        setFilter={setFilter}
      />
      
      <EmployeeList
        data={visibleEmployees}
        onTogglePromotion={togglePromotion}
        onToggleBonus={toggleBonus}
        onDelete={deleteEmployee}
      />
      
      <EmployeeAddForm onAdd={addEmployee} />
    </div>
  );
};

export default App;
