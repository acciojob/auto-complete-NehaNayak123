import React, { useState, useEffect } from "react";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
import './../styles/App.css';

const App = () => {
    const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      
      await new Promise((resolve) => setTimeout(resolve, 300)); // Simulate async delay
      
      const filtered = fruits.filter((fruit) =>
        fruit.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered);
    };
    
    fetchSuggestions();
  }, [query]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App
