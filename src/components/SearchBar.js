import { useState } from "react";
import "./Searchbar.css";

function SearchBar({onSubmit}) {

    const [term, setTerm] = useState('')

  const handleChange = (event) => {
    setTerm(event.target.value);
    console.log("clicked");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    console.log("submit");
  };

  return (
    <div className="search-bar">
      
      <form onSubmit={handleSubmit} className="search-form">
      <label>Search</label>
        <input
        value={term}
          onChange={handleChange}
          className="search-input"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchBar;
