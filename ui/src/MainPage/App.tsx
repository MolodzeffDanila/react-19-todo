import { Link } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <main className="app-page">
      <h1>Main Page</h1>
      <p>Welcome to the /main route. Use the navigation below to explore.</p>
      <nav className="app-nav">
        <Link to="/login">Go to Login</Link>
      </nav>
    </main>
  )
}
