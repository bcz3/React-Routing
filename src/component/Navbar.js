import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <h1>Abdillah</h1>
        <ul>
          <NavLink to={"/"}>
            <li>Beranda</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>Tentang</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Kontak</li>
          </NavLink>
        </ul>
    </nav>
  )
}

export default Navbar