import React, { useState } from 'react';
import { useAppContext } from '../context/AppContext';

const CategorySelector = () => {
  const { categories } = useAppContext();
  const [ selectedCategory, setSelectedCategory ] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }
  return (
    <div>
      <h2>Select Category</h2>
      <select
      value={selectedCategory}
      onChange={handleCategoryChange}
      className="p-2 border border-gray-300"
      >
         <option value="">-- Select Category --</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CategorySelector