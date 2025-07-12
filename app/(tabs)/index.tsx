import { AppHeader } from "@/components/custom/common/AppHeader"
import { CategoryNavigator } from "@/components/custom/common/CategoryNavigator"
import { DownloadBanner } from "@/components/custom/common/DownloadBanner"
import { FeaturedLargeAppCard } from "@/components/custom/common/FeaturedLargeAppCard"
import { SmallGameCard } from "@/components/custom/common/SmallGameCard"
import React, { useCallback, useEffect, useRef, useState } from "react"

// 数据（可以从 API 获取或放在单独的数据文件中）
const categoriesData = ["推荐", "游戏", "社交", "工具", "影音", "购物", "教育"]

const INITIAL_GAME_CARDS_COUNT = 10 // 初始加载的卡片数量
const HEADER_COLLAPSE_THRESHOLD = 100 // 滚动超过此距离时头部收缩 (px)

export default function AppStoreLayout() {
  const [gameCardCount, _setGameCardCount] = useState(INITIAL_GAME_CARDS_COUNT)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState(false) // 新增状态
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 模拟加载更多游戏数据
  const loadMoreGames = useCallback(() => {
    if (isLoadingMore) return

    setIsLoadingMore(true)
  }, [isLoadingMore])

  // 滚动事件处理函数，同时处理头部收缩和无限滚动
  const handleScroll = useCallback(() => {
    const { current } = scrollContainerRef
    if (current) {
      const scrollTop = current.scrollTop
      const scrollHeight = current.scrollHeight
      const clientHeight = current.clientHeight

      // 头部收缩逻辑
      setIsHeaderCollapsed(scrollTop > HEADER_COLLAPSE_THRESHOLD)

      // 无限滚动逻辑 (距离底部50px以内触发)
      const isAtBottom = scrollHeight - scrollTop - clientHeight < 50
      if (isAtBottom && !isLoadingMore) {
        loadMoreGames()
      }
    }
  }, [isLoadingMore, loadMoreGames])

  // 添加和移除滚动事件监听器
  useEffect(() => {
    const { current } = scrollContainerRef
    if (current) {
      current.addEventListener("scroll", handleScroll)
      return () => {
        current.removeEventListener("scroll", handleScroll)
      }
    }
  }, [handleScroll])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white font-sans">
      {/* 传递 isCollapsed 状态给 AppHeader */}
      <AppHeader title="应用包" isCollapsed={isHeaderCollapsed} />

      {/* 将 ref 附加到主要的可滚动区域 */}
      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto">
        <CategoryNavigator categories={categoriesData} />

        <div className="px-4 py-5 space-y-4">
          <FeaturedLargeAppCard />

          <div className="flex justify-between items-center px-0 pt-2">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              精选游戏
            </h2>
            <button className="text-indigo-600 dark:text-indigo-400 text-sm font-medium flex items-center">
              更多 <span className="ml-1 text-base">&gt;</span>
            </button>
          </div>

          <div className="flex overflow-x-auto pb-4 space-x-4">
            {/* 动态渲染 SmallGameCard 数量 */}
            {[...Array(gameCardCount)].map((_, index) => (
              <SmallGameCard key={index} />
            ))}
          </div>

          {/* 加载更多时的指示器 */}
          {isLoadingMore && (
            <div className="py-4 flex justify-center items-center">
              <span className="text-indigo-600 dark:text-indigo-400">
                加载中...
              </span>
            </div>
          )}
        </div>
      </div>

      <DownloadBanner text="下载应用宝，领新人专属福利！" buttonText="下载" />
    </div>
  )
}
