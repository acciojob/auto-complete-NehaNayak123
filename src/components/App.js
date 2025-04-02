// import React, { useState, useEffect } from "react";

// const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
// import './../styles/App.css';

// const App = () => {
//     const [query, setQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);

//   useEffect(() => {
//     const fetchSuggestions = () => {
//       if (query.trim() === "") {
//         setSuggestions([]);
//         return;
//       }
      
//     new Promise((resolve) => setTimeout(resolve, 300)); // Simulate async delay
      
//       const filtered = fruits.filter((fruit) =>
//         fruit.toLowerCase().includes(query.toLowerCase())
//       );
//       setSuggestions(filtered);
//     };
    
//     fetchSuggestions();
//   }, [query]);
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search fruits..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       {suggestions.length > 0 && (
//         <ul>
//   {suggestions.length > 0 ? (
//     suggestions.map((suggestion, index) => (
//       <li key={index}>{suggestion}</li>
//     ))
//   ) : (
//     <li style={{ display: "none" }}>No results</li> 
//   )}
// </ul>
//       )}
//     </div>
//   );
// }

// export default App



import React, { useState,useEffect } from "react";
import './../styles/App.css';

const App = () => {

  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(fruits);

  useEffect(() => {
    setFiltered(fruits.filter((fruit) => {
      return fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    }))
  },[search])

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Search item</h1>
      <input type="text" onChange={(event) => setSearch(event.target.value)} />
      <ul>
        {
          filtered.map((fruit) => {
            return <li>{fruit}</li>
          })
        }
      </ul>

    </div>
  )
}

export default App
