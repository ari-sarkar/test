import React, { useState } from "react";
import "./Search.css";
import Data from "../../Data.json";
import { Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const inputChange = e => {
    if (e.target.value !== "") {
      setShowSuggestions(true);
      setInputValue(e.target.value);
      let result = Data.filter(e => {
        return e.name
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(inputValue.toLowerCase().replace(/\s/g, ""));
      });
      setSuggestions(result);
      console.log(suggestions);
    } else {
      setShowSuggestions(false);
    }
  };

  const onNameSelect = e => {
    //console.log(e);
    setShowSuggestions(false);
    setInputValue('');
  };

  const clearInput = () => {
    setShowSuggestions(false);
    setInputValue(" ");
  };
  return (
    <div className="search_container">
      <div className="search_wrapper">
        <input
          onChange={e => inputChange(e)}
          placeholder="Enter image name"
          value={inputValue}
        />
        <ion-icon
          onClick={clearInput}
          className="icon"
          name="close-outline"
        ></ion-icon>
      </div>

      {suggestions.length ? (
        <div
          className={
            "autocomplete_container " +
            (showSuggestions ? " " : "hide_autocomplete ")
          }
        >
          {suggestions.map((ele, i) => (
            <NavLink onClick={onNameSelect} key={i} exact="true" to={ele.route}>
              {ele.name}
            </NavLink>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Search;
