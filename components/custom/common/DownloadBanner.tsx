import React from "react"

interface DownloadBannerProps {
  text: string
  buttonText: string
}

export const DownloadBanner: React.FC<DownloadBannerProps> = ({
  text,
  buttonText,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 bg-white dark:bg-gray-800 shadow-lg flex items-center justify-between z-20">
      <div className="flex items-center">
        <div className="w-10 h-10 rounded-md skeleton mr-3"></div>
        <div className="text-sm text-gray-800 dark:text-white">{text}</div>
      </div>
      <button className="bg-indigo-600 px-4 py-1.5 rounded-full text-white text-sm font-medium transition-colors duration-200 hover:bg-indigo-700">
        {buttonText}
      </button>
    </div>
  )
}
