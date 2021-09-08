import React, {useState} from 'react'
import {  NavLink } from 'react-router-dom'
import { faBars, faHome, faLock, faTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './Style/menu.scss'

const Navbar = () => {

    const [ click, setClick ] = useState(false)


    const handleClick = () => setClick(!click)
    const Close = () => setClick(false)
    return (
        <>

        <div className={click ? "container" : " "} onClick={() => Close()} >
                <nav className="navbar" onClick={(e)=>e.stopPropagation()}>
                    <div className="nav-container">
                        <NavLink to="/" className="nav-logo">
                           <img src="./logo.png" className="logo" alt="CryptoApp" />
                        </NavLink>

                        <ul className={click ? "nav-menu active" : "nav-menu"}>
                            <li className="nav-item">
                                <NavLink
                                    exact
                                    to="/"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >
                    
                                <FontAwesomeIcon icon={faHome} className="icon" />
                                   Home
                                </NavLink>
                            </li> 
                        

                            <li className="nav-item">
                                <NavLink
                                    to="/about"
                                    activeClassName="active"
                                    className="nav-links"
                                    onClick={click ? handleClick : null}
                                >   
                                    About
                                </NavLink>
                            </li>

                            <li className=" button ">
                              <NavLink
                                    to="/login"
                                    className="button "
                                    onClick={click ? handleClick : null }
                               >
                               <FontAwesomeIcon 
                                className="lock"
                               icon={ click ? faTimes :  faLock } />
                                 LOGIN
                             </NavLink>
                            </li>
                        </ul>
                        <div className="nav-icon" onClick={handleClick}>
                             <FontAwesomeIcon 
                             icon={ click ? faTimes :  faBars } />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
