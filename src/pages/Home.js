import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home" id="home">
      <h1>Mobile Legends</h1>
      <NavLink to="/hero" className="link home-link">
        Hero
      </NavLink>
      <NavLink to="/role" className="link home-link">
        Role Hero
      </NavLink>
      <NavLink to="/about" className="link home-link">
        about
      </NavLink>
    </div>
  )
}
