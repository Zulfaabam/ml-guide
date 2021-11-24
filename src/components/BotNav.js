import React from 'react'
import { NavLink } from 'react-router-dom'
import './BotNav.css'

export default function BotNav() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        Home
      </NavLink>
      <NavLink to="/hero" className="link nav-link">
        Hero
      </NavLink>
      <NavLink to="/role" className="link nav-link">
        Role Hero
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        About
      </NavLink>
    </div>
  )
}
