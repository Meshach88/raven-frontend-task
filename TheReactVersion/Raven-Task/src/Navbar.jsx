import React from 'react'
import {logo} from '../src/assets'

const Navbar = () => {
  return (
    <nav>
      <div class="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul class="menu">
        <li><a href="">Dashboard</a></li>
        <li><a href="">Markets</a></li>
        <li><a href="">Wallet</a></li>
        <li><a href="">Profile</a></li>
      </ul>
      <div class="search">
        <form>
          <input type="text" placeholder="Search..." />
          <button type="submit">Go</button>
        </form>
      </div>
    </nav>
  )
}

export default Navbar
