import TextField from "./TextField"


function FilterBar() {
  return (
    <div className="filter-bar">
        <TextField label="search"/>
        <p>year</p>
        <p>month</p>
        <p>holiday</p>
        <p>family Member</p>
        <p>others</p>
    </div>
  );
}

export default FilterBar;
