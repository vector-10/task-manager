import React from 'react'
import { useAppContext } from '../context/AppContext'

const CategoryList = () => {
  const { categories } = useAppContext();
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}></li>
        ))}
      </ul>
    </div>
  )
}

export default CategoryList