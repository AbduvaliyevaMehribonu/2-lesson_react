import React from 'react'
import logo from '../../assets/images/logo.png'
import icon1 from '../../assets/images/sidebarIcon1.svg'
import icon2 from '../../assets/images/sidebarIcon2.svg'
import icon3 from '../../assets/images/sidebarIcon3.svg'
import icon4 from '../../assets/images/sidebarIcon4.svg'
import icon5 from '../../assets/images/sidebarIcon5.svg'
import icon6 from '../../assets/images/sidebarIcon6.svg'


const Sidebar = () => {
  return (
    <div className='Sidebar'>
  <img src={logo} alt="" />
  <div className="user__wrapper">
    <div className="user"></div>
    <p>John Doe</p>
  </div>
  <div className="sidebar__item">
    <img src={icon1} alt="" />
    <p>Boshqaruv</p>
  </div>
  <div className="sidebar__item">
    <img src={icon2} alt="" />
    <p>To’lov</p>
  </div>
  <div className="sidebar__item">
    <img src={icon3} alt="" />
    <p>O’qituvchilar</p>
  </div>
  <div className="sidebar__item">
    <img src={icon4} alt="" />
    <p>Dars jadvali</p>
  </div>
  <div className="sidebar__item">
    <img src={icon5} alt="" />
    <p>Davomat</p>
  </div>
  <div className="sidebar__item">
    <img src={icon6} alt="" />
    <p>Sozlamalar</p>
  </div>
  <div className="sidebar__item_">
  <h3>© 2022 All rights reserved!</h3 >
  <b>Made by Edify Team</b>
  </div>
    </div>
  )
}

export default Sidebar