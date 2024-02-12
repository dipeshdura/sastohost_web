import navbar from '../css/Navbar.module.css';
import logo from '../assets/img/logo.png';

// Home
import { GoHomeFill } from "react-icons/go";
// import { FiHome } from "react-icons/fi";
// about
import { BsInfoCircle } from "react-icons/bs";
// import { BsFillInfoCircleFill } from "react-icons/bs";

// product
// import { FaShoppingCart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
//pricing
// import { HiCurrencyDollar } from "react-icons/hi";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
// contact
// import { BiSolidContact } from "react-icons/bi";
import { RiContactsBook2Line } from "react-icons/ri";
import { useState } from 'react';
// Login
import Login from './Account/Login';

function Navbar() {
  const [accountbtn,setAccountbtn] =useState(false);
  const toggleAccountbtn=(event)=>{
    event.preventDefault();
    setAccountbtn(!accountbtn);
  }
  const [menu ,setMenu] =useState(true);
  const handleMenu=()=>{
    setMenu(!menu);
    // document.querySelector('.ul').classList.replace('.ul','menu_active');
  }

  return (
    <>
    {accountbtn && (
      <div className={navbar.accountbtn_container}>
        <div className={navbar.account_div}>
        <Login />
        </div>
    </div>
        )
    }
    <header className={navbar.header}>
    <div className={navbar.navbar_container}>
      <div className={navbar.navbar_small_size}>
      <div className={navbar.right_side} onClick={handleMenu}>
            <div className={navbar.right_img}>
            <img src={logo} alt="" />
            </div>
            <div className={navbar.right_text}>
                <h3>
                HOSTING
                </h3>
            </div>
        </div>
        <div className={navbar.left_side}>
          <div className={navbar.my_account}>
            <button onClick={toggleAccountbtn}>My Account</button>
          </div>
        </div>
        {/* <div className={navbar.menu_icon}>
        <i className="fa-solid fa-bars"
        onClick={handleMenu}></i>
        </div> */}
      </div>
      <div className={navbar.right_container_side}>
        <div className={navbar.right_side} onClick={handleMenu}>
            <div className={navbar.right_img}>
            <img src={logo} alt="" />
            </div>
            <div className={navbar.right_text}>
                <h3>
                HOSTING
                </h3>
            </div>
        </div>
        </div>

        <div className={navbar.middle_side}>
          {menu &&(
            <ul className={navbar.ul}>
  
       
        <li className={navbar.navbar_item}>
          <a href="" className={navbar.navbar_link}>
             <GoHomeFill className={navbar.icon_link}/>
            <span className={navbar.text_active}>Home</span>
            </a>
            </li>
        <li className={navbar.navbar_item}>
          <a href="" className={navbar.navbar_link}>
            <BsInfoCircle className={navbar.icon_link}/>
            <span>
              About
            </span>
            </a>
            </li>
        <li className={navbar.navbar_item}>
          <a href="" className={navbar.navbar_link}>
            <IoCartOutline className={navbar.icon_link}/>
            <span>Product</span>
            </a>
            </li>
        <li className={navbar.navbar_item}>
          <a href="" className={navbar.navbar_link}>
            <RiMoneyDollarCircleLine className={navbar.icon_link}/>
            <span>Pricing</span>
            </a>
            </li>
        <li className={navbar.navbar_item}>
          <a href="" className={navbar.navbar_link}>
              <RiContactsBook2Line className={navbar.icon_link}/>
            <span>
            Contact
              </span>
            </a>
            </li>
 

            </ul>)}
        </div>
        <div className={navbar.left_container_side}>
        <div className={navbar.left_side}>
          {/* <div className="mode_container">
            <input type="range"  />
          </div> */}
          <div className={navbar.my_account}>
            <button onClick={toggleAccountbtn}>My Account</button>
          </div>
        </div>
        </div>
    </div>
    </header>
    </>
  )
  
}

export default Navbar