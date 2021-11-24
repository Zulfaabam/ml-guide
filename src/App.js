import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Hero from './pages/Hero'
import HeroDetail from './pages/HeroDetail'
import Role from './pages/Role'
import RoleHeroes from './pages/RoleHeroes'
import About from './pages/About'
import BotNav from './components/BotNav'
import { createBrowserHistory } from 'history'

const history = new createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={history}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/hero/:heroId" element={<HeroDetail />} />
          <Route path="/role" element={<Role />} />
          <Route path="/role/:roleName" element={<RoleHeroes />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer>
          <BotNav />
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
