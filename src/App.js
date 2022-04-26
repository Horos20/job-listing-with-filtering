import React from "react";
import JobCard from "./components/JobCard";
import FilterBar from "./components/FilterBar";
import { useState } from "react";

function App() {
  function AddCategory(item) {
    if (category.indexOf(item) < 0) {
        setCategory(category => [...category, item]);
    }
  }

  function RemoveCategory(item) {
    setCategory(category.filter(c => c !== item))
  }

  const [category, setCategory] = useState([]);

  return(
    <>
      <div className="page-container">
        <div className="container">
          <FilterBar category={category} RemoveCategory={RemoveCategory}/>
          <JobCard category={category} AddCategory={AddCategory}/>
        </div>
      </div>
    </>
  )
}

export default App;
