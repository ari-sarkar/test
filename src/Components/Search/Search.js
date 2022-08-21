import React, { useState, useRef } from "react";
import "./Search.css";
import Data from "../../Data.json";
import { NavLink } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const iconRef = useRef(null);

  const inputChange = e => {
    console.log(e);
    iconRef.current.style.display = "block";

    setShowSuggestions(true);
    setInputValue(e.target.value);
    let result = Data.filter(ele => {
      return ele.name
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(e.target.value.toLowerCase().replace(/\s/g, ""));
    });
    setSuggestions(result);
    //console.log(suggestions);
  };

  const onNameSelect = e => {
    //console.log(e);
    setShowSuggestions(false);
    setInputValue("");
    iconRef.current.style.display = "none";
  };

  const clearInput = () => {
    setShowSuggestions(false);
    setInputValue(" ");
    iconRef.current.style.display = "none";
  };

  return (
    <div className="search_container">
      <div className="search_wrapper">
        <input
          onInput={e => inputChange(e)}
          placeholder="Enter image name"
          value={inputValue}
        />
        <ion-icon
          onClick={clearInput}
          ref={iconRef}
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
