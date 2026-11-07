const AppInfo = ({ employeesCount, bonusCount }) => {
  return (
    <div className="app-info block-style">
      <h1>Учет сотрудников компании №</h1>
      <h2>Общее число сотрудников: {employeesCount}</h2>
      <h2>Премию получат: {bonusCount}</h2>
    </div>
  );
};

export default AppInfo;
