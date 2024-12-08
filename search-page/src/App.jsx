import React, { useState } from 'react';
import './App.css'; // Import the external CSS file

const mockData = [
  { id: 1, title: 'React Basics', category: 'Programming' },
  { id: 2, title: 'CSS Tricks', category: 'Design' },
  { id: 3, title: 'JavaScript Guide', category: 'Programming' },
  { id: 4, title: 'Responsive Design Tips', category: 'Design' },
];

const App = () => {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('');
  const filteredData = mockData.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) &&
    (filter ? item.category === filter : true)
  );

  return (
    <div className="container">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-box"
      />

      {/* Filter */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="filter-dropdown"
      >
        <option value="">All Categories</option>
        <option value="Programming">Programming</option>
        <option value="Design">Design</option>
      </select>

      {/* Results */}
      <div className="results">
        {filteredData.length ? (
          filteredData.map((item) => (
            <div key={item.id} className="result-item">
              {item.title} - <span className="category">{item.category}</span>
            </div>
          ))
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
