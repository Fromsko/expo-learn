import React from "react"

interface AppHeaderProps {
  title: string
  isCollapsed: boolean // 新增属性
}

export const AppHeader: React.FC<AppHeaderProps> = ({ title, isCollapsed }) => {
  return (
    // 使用条件类名来动态调整头部高度和背景
    <div
      className={`
        sticky top-0 w-full z-10 overflow-hidden transition-all duration-300 ease-in-out
        ${
          isCollapsed
            ? "h-16 bg-gray-800 dark:bg-gray-900 shadow-md"
            : "h-52 bg-blue-400 dark:bg-gray-800"
        }
      `}
    >
      {/* 头部图片骨架 - 在收缩时隐藏或淡出 */}
      <div
        className={`w-full h-full skeleton transition-opacity duration-300
          ${isCollapsed ? "opacity-0" : "opacity-100"}
        `}
      ></div>

      {/* 标题 - 调整位置和大小 */}
      <div
        className={`
          absolute left-4 text-white font-bold transition-all duration-300 ease-in-out
          ${
            isCollapsed
              ? "top-1/2 -translate-y-1/2 text-xl"
              : "bottom-4 text-3xl opacity-70"
          }
        `}
      >
        {title}
      </div>

      {/* 搜索和菜单图标 - 始终显示，但在收缩时可能调整样式 */}
      <div
        className={`
          absolute right-4 flex space-x-4 transition-all duration-300 ease-in-out
          ${isCollapsed ? "top-1/2 -translate-y-1/2" : "top-4"}
        `}
      >
        <div className="w-8 h-8 skeleton rounded-full"></div>
        <div className="w-8 h-8 skeleton rounded-full"></div>
      </div>
    </div>
  )
}
