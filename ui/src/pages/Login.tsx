import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    // In a real app, you'd validate the user here.
    navigate('/main')
  }

  return (
    <main className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label>
          Username
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter your username"
            required
          />
        </label>
        <button type="submit">Sign in</button>
      </form>
    </main>
  )
}
