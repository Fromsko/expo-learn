import React from "react"
import { ScrollView } from "react-native"

export default function PersonalHomepage() {
  const skills = [
    "React",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Node.js",
    "GraphQL",
  ]
  const projects = [
    {
      title: "个人博客系统",
      description: "支持 Markdown 编辑、自动部署、标签归档、评论功能等。",
      image:
        "https://www.bing.com/th/id/OIP.ztavKmXSTBHvk_mzfDEByAHaK5?w=160&h=211&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    },
    {
      title: "移动端 UI 库",
      description: "专为 React Native 打造的高性能组件库。",
      image:
        "https://www.bing.com/th/id/OIP.ztavKmXSTBHvk_mzfDEByAHaK5?w=160&h=211&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    },
    {
      title: "AI 工具集",
      description: "集成 GPT、翻译、文案润色等工具的网页平台。",
      image:
        "https://www.bing.com/th/id/OIP.ztavKmXSTBHvk_mzfDEByAHaK5?w=160&h=211&c=8&rs=1&qlt=90&r=0&o=6&pid=3.1&rm=2",
    },
  ]

  return (
    <ScrollView className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans overflow-y-scroll scrollbar-none">
      {/* Header */}
      <div className="flex flex-col items-center pt-10 pb-6">
        <img
          src="https://avatars.githubusercontent.com/u/1"
          alt="avatar"
          className="w-24 h-24 rounded-full mb-3 shadow-md"
        />
        <h1 className="text-2xl font-bold">Fromsko</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          热爱构建有趣的应用，用代码传递价值。
        </p>
      </div>

      {/* 社交按钮 */}
      <div className="flex justify-center space-x-3 mb-6">
        <a
          href="https://github.com/fromsko"
          target="_blank"
          className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          GitHub
        </a>
        <a
          href="mailto:admin@gmail.com"
          className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          邮箱
        </a>
        <a
          href="#"
          className="bg-indigo-100 dark:bg-indigo-800 text-indigo-600 dark:text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          微信
        </a>
      </div>

      {/* 技能标签 */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold mb-3">技能栈</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="bg-gray-100 dark:bg-gray-800 text-sm px-3 py-1 rounded-full text-gray-700 dark:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* 自我介绍 */}
      <div className="px-6 mb-8">
        <h2 className="text-lg font-semibold mb-2">关于我</h2>
        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          我是一名前端开发者，关注用户体验，热爱设计与代码结合。
          擅长构建现代响应式应用，喜欢探索技术背后的原理，也热衷于开源项目。
        </p>
      </div>

      {/* 项目展示 */}
      <div className="px-6 mb-10">
        <h2 className="text-lg font-semibold mb-4">项目展示</h2>
        <div className="space-y-4">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="font-bold text-base mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScrollView>
  )
}
