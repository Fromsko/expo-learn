import React from "react"

export const FeaturedLargeAppCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md">
      <div className="w-full h-48 rounded-xl skeleton mb-4"></div>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg mr-3 skeleton"></div>
        <div className="flex-1">
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/5 skeleton mb-2"></div>
          <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5 skeleton"></div>
        </div>
        <button className="bg-indigo-600 px-4 py-1.5 rounded-full text-white text-sm font-medium transition-colors duration-200 hover:bg-indigo-700">
          下载
        </button>
      </div>
    </div>
  )
}
