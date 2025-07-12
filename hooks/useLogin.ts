import { useState } from "react"

export const useLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    console.log("Login with", email, password)
    // TODO: Add real login logic here
  }

  return {
    email,
    password,
    setEmail,
    setPassword,
    handleLogin,
  }
}
