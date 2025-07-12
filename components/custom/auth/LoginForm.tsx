import { useLogin } from "@/hooks/useLogin"

export const LoginForm = () => {
  const { email, password, setEmail, setPassword, handleLogin } = useLogin()

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const isEmailValid = validateEmail(email)
  const isPasswordValid = password.length >= 6

  return (
    <div className="w-full max-w-md mx-auto bg-white dark:bg-gray-950 p-10 rounded-2xl shadow-xl transition-all">
      <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8">
        欢迎登录
      </h2>

      <div className="space-y-6">
        {/* Email Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            📧 邮箱地址
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white transition-all focus:outline-none focus:ring-2 ${
              isEmailValid
                ? "focus:ring-indigo-500 border-gray-300"
                : "focus:ring-red-500 border-red-500"
            }`}
          />
          {!isEmailValid && email && (
            <p className="text-xs text-red-500 mt-1">请输入有效的邮箱地址</p>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            🔒 密码（至少6位）
          </label>
          <input
            type="password"
            id="password"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full px-4 py-2 text-sm border rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white transition-all focus:outline-none focus:ring-2 ${
              isPasswordValid
                ? "focus:ring-indigo-500 border-gray-300"
                : "focus:ring-red-500 border-red-500"
            }`}
          />
          {!isPasswordValid && password && (
            <p className="text-xs text-red-500 mt-1">密码至少需要6位</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleLogin}
          disabled={!isEmailValid || !isPasswordValid}
          className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-colors duration-150 ease-in-out ${
            isEmailValid && isPasswordValid
              ? "bg-indigo-600 hover:bg-indigo-700 text-white"
              : "bg-gray-400 cursor-not-allowed text-white"
          }`}
        >
          登录
        </button>
      </div>

      {/* Footer */}
      <p className="mt-6 text-sm text-center text-gray-600 dark:text-gray-400">
        还没有账号？{" "}
        <a href="#" className="text-indigo-500 hover:underline">
          注册
        </a>
      </p>
    </div>
  )
}
