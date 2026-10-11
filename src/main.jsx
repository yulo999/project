import { useState } from 'react';
import './Main.css';

const Main = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'Mike', salary: 1000, isPromoted: false, hasBonus: false },
    { id: 2, name: 'Jack', salary: 1200, isPromoted: false, hasBonus: false },
    { id: 3, name: 'John', salary: 800, isPromoted: false, hasBonus: false },
  ]);
};

export default Main;
