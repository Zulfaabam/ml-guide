import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function HeroDetail() {
  const [hero, setHero] = useState()
  const { heroId } = useParams()

  useEffect(() => {
    const fetchHero = async () => {
      try {
        const response = await axios.get(
          `https://api.dazelpro.com/mobile-legends/hero/${heroId}`
        )
        if (response.status === 200) {
          setHero(response.data.hero)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchHero()
  }, [heroId])
  console.log(hero)

  return (
    <div className="hero">
      <h1>
        Hero Detail - {hero === undefined ? 'Loading...' : hero[0].hero_name}
      </h1>
      {hero === undefined
        ? 'Loading...'
        : hero.map((h) => {
            return (
              <div key={h.hero_id} className="hero-detail">
                {/* <img src={h.hero_avatar} alt={`gambar ${h.hero_name}`} /> */}
                <p>Hero ID: {h.hero_id}</p>
                <p>Hero Name: {h.hero_name}</p>
                <p>Hero Ability: {h.hero_overview.hero_ability}</p>
                <p>Hero difficulty: {h.hero_overview.hero_difficulty}</p>
                <p>Hero Durability: {h.hero_overview.hero_durability}</p>
                <p>Hero Offence: {h.hero_overview.hero_offence}</p>
                <p>Hero Role: {h.hero_role}</p>
                <p>Hero Specially: {h.hero_specially}</p>
              </div>
            )
          })}
    </div>
  )
}
