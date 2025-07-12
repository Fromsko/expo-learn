import React from "react"

export const SmallGameCard: React.FC = () => {
  return (
    <div className="flex-none w-32 bg-white dark:bg-gray-800 rounded-xl p-3 flex flex-col items-center shadow-sm">
      <div className="w-24 h-24 rounded-lg skeleton mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full skeleton mb-1"></div>
      <button className="w-full bg-indigo-100 dark:bg-indigo-700 px-2 py-1 rounded-full text-indigo-700 dark:text-white text-xs font-medium transition-colors duration-200 hover:bg-indigo-200 dark:hover:bg-indigo-600 mt-2">
        下载
      </button>
    </div>
  )
}
