import React from "react";

const Filters = props => {
  const { handleFilter } = props;
  return (
    <form className="filter">
      <input type="text" onChange={handleFilter}></input>
    </form>
  );
};

export default Filters;
