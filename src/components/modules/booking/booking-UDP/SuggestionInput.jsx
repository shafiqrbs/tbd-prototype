// src/SuggestionInput.js
import React, { useState } from "react";

const suggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

const SuggestionInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const userInput = e.target.value;
    setInputValue(userInput);
    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().includes(userInput.toLowerCase())
      )
    );
  };

  const handleClick = () => {
    setShowSuggestions(true);
    setFilteredSuggestions(suggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="input_suggestion_wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onClick={handleClick}
      />
      {showSuggestions && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestionInput;
