import React from "react"

interface CategoryNavigatorProps {
  categories: string[]
}

export const CategoryNavigator: React.FC<CategoryNavigatorProps> = ({
  categories,
}) => {
  return (
    <div className="px-4 py-3 bg-white dark:bg-gray-800 shadow-sm overflow-x-auto whitespace-nowrap">
      <div className="inline-flex space-x-3">
        {categories.map((item, index) => (
          <button
            key={index}
            className="bg-indigo-100 dark:bg-indigo-800 px-4 py-2 rounded-full text-indigo-700 dark:text-white text-sm font-medium transition-colors duration-200 hover:bg-indigo-200 dark:hover:bg-indigo-700"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  )
}
