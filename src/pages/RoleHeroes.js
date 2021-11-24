import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'
import roleDesc from '../components/RoleDesc'

export default function RoleHeroes() {
  const [hero, setHero] = useState()
  const { roleName } = useParams()

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(
          `https://api.dazelpro.com/mobile-legends/role?roleName=${roleName}`
        )
        if (response.status === 200) {
          setHero(response.data.hero)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchHero()
  }, [roleName])
  console.log(hero)
  //   console.log(roleDesc)

  return (
    <div className="role">
      <h1>{roleName} Heroes</h1>
      <div className="role-desc">
        <h2>Description:</h2>
        {roleDesc.map(
          (r) => r.name.includes(roleName) && <p key={r.name}>{r.desc}</p>
        )}
      </div>
      <div className="role-heroes">
        <h2>Heroes:</h2>
        {hero === undefined
          ? 'Loading...'
          : hero.map((h) => {
              return (
                <div key={h.hero_id}>
                  {/* <img src={h.hero_avatar} alt={`gambar ${h.hero_name}`} /> */}
                  <p>{h.hero_name}</p>
                </div>
              )
            })}
      </div>
    </div>
  )
}
