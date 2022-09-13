import TextField from "./TextField"

import './filterbar.css';

function FilterBar() {
  return (
    <div className="filterbar">
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
