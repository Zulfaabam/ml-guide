import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

export default function Role(props) {
  const [role, setRole] = useState()
  const { history } = props

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(
          `https://api.dazelpro.com/mobile-legends/role`
        )
        if (response.status === 200) {
          setRole(response.data.role)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchHero()
  }, [])
  console.log(role)

  return (
    <div className="role">
      <h1>Role</h1>
      <div className="role-container">
        {role === undefined
          ? 'Loading...'
          : role.map((r) => {
              return (
                <div key={r.role_id}>
                  <NavLink
                    to={`/role/${r.role_name}`}
                    onClick={() => history.push(`/role/${r.role_name}`)}
                    className="link"
                  >
                    <p>{r.role_name}</p>
                  </NavLink>
                </div>
              )
            })}
      </div>
    </div>
  )
}
