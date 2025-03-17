import * as React from "react";
import { useNavigate } from "react-router-dom";
import { cn } from '../../lib/utils';

const Input = React.forwardRef(({
  className, type, ...props
}, ref) => {

  const [filteredResults, setFilteredResults] = React.useState([]);
  const [results, setResults] = React.useState([]);
  const [input, setInput] = React.useState("");
  const navigate = useNavigate();

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user && user.name.toLowerCase().includes(value.toLowerCase());
        });
        console.log(results); // Log the filtered results (or handle them as needed)
        setResults(results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Handle any errors
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
    if (value.trim() === "") {
      setFilteredResults([]); // Clear suggestions if input is empty
      return;
    }
    const matches = results.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(matches);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && results.length > 0) {
      // Redirect to the first search result
      const firstResult = results[0];
      navigate(`/user/${firstResult.id}`);
    }
  };

  const handleResultClick = (result) => {
    navigate(`/user/${result.id}`); // Redirect to a new page with the user's ID
  };

  return (
    <div className="relative w-full">
      <input
        onKeyDown={handleKeyDown} // Add the keydown handler
        value={input}
        onChange={(e) => handleChange(e.target.value)}
        type={type}
        className={cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
      {/* Display Suggestions */}
      {filteredResults.length > 0 && (
        <ul className="absolute top-10 left-0 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {filteredResults.map((result) => (
            <li
              key={result.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleResultClick(result)} // Set input when clicked
              style={{ color: "black" }} // Inline CSS to change text color
            >
              {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
});

Input.displayName = "Input";

export { Input };
