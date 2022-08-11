import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SearchDogByName } from "../../redux/actions";
import "../SearchBar/SearchBar.css";

export default function SearchBar({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
    console.log(name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SearchDogByName(name));
    setName("");
    console.log(name);
    setCurrentPage(1);
  };

  return (
    <div className="container">
      <form action="" className="search-bar" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="search"
          name="search"
          pattern=".*\S.*"
          required
          value={name}
          onChange={(e) => handleChange(e)}
          className="input"
          id="search-input"
        />
        <button type="submit" value="Search" className="search-btn" />
      </form>
    </div>
  );
}
