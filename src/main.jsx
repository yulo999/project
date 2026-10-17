import { useState } from 'react';
import './Main.css';

const Main = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Mike', salary: 1000, isPromoted: false, hasBonus: false },
    { id: 2, name: 'Jack', salary: 1200, isPromoted: false, hasBonus: false },
    { id: 3, name: 'John', salary: 800, isPromoted: false, hasBonus: false },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [newName, setNewName] = useState('');
  const [newSalary, setNewSalary] = useState('');

  const addEmployee = (e) => {
    e.preventDefault();
    if (newName.trim() === '' || newSalary.trim() === '') return;

    const newEmp = {
      id: Date.now(),
      name: newName,
      salary: parseInt(newSalary, 10),
      isPromoted: false,
      hasBonus: false
    };

    setEmployees([...employees, newEmp]);
    setNewName('');
    setNewSalary('');
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const togglePromotion = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, isPromoted: !emp.isPromoted } : emp
    ));
  };

  const toggleBonus = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id ? { ...emp, hasBonus: !emp.hasBonus } : emp
    ));
  };

  const searchEmployee = (items, term) => {
    if (term.length === 0) return items;
    return items.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
  };

  const filterEmployees = (items, filterType) => {
    switch (filterType) {
      case 'promoted':
        return items.filter(item => item.isPromoted);
      case 'salaryMore1000':
        return items.filter(item => item.salary > 1000);
      default:
        return items;
    }
  };

  const visibleEmployees = filterEmployees(searchEmployee(employees, searchTerm), filter);
  const bonusCount = employees.filter(emp => emp.hasBonus).length;

  return ()

};

export default Main;
