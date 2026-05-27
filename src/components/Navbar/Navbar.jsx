import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/place-details">Details</NavLink>

      <NavLink to="/report">Report</NavLink>

      <NavLink to="/recommendations">AI Tips</NavLink>
    </nav>
  )
}

export default Navbar