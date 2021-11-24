import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const api = 'https://api.dazelpro.com/mobile-legends/hero'

export default function Hero(props) {
  const [hero, setHero] = useState()
  const { history } = props

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(api)
        if (response.status === 200) {
          setHero(response.data.hero)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchHero()
  }, [])
  console.log(hero)

  return (
    <div>
      <h1>hero</h1>
      {hero === undefined
        ? 'Loading...'
        : hero.map((h) => {
            return (
              <div key={h.hero_id}>
                {/* <img src={h.hero_avatar} alt={`gambar ${h.hero_name}`} /> */}
                <NavLink
                  to={`/hero/${h.hero_id}`}
                  onClick={() => history.push(`/hero/${h.hero_id}`)}
                >
                  <p>{h.hero_name}</p>
                </NavLink>
              </div>
            )
          })}
    </div>
  )
}
