import React from 'react'
import navicon1 from '../../assets/images/navbaricon1.png';
import navicon2 from '../../assets/images/navbaricon2.png';
import searchicon from '../../assets/images/searchicon.png';




const Navbar = () => {
  return (
<>
<nav>
  <div className="nav__item">
    <img src={navicon1} alt="" />
    <div className="nav__item__count">
      <p>Guruhlar soni</p>
      <strong> <span>10</span>ta</strong>
    </div>
  </div>
  <div className="nav__item">
    <img src={navicon2} alt="" />
    <div className="nav__item__count">
      <p>To’lov qilmaganlar soni</p>
      <strong> <span>16</span>ta</strong>
    </div>
  </div>
  <div className='searchicon'>
    <img src={searchicon} alt="" />
  </div>
</nav>

</>
  )
}

export default Navbar