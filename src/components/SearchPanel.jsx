const SearchPanel = ({ searchTerm, setSearchTerm, filter, setFilter }) => {
  return (
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
  );
};

export default SearchPanel;