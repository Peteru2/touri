import { Link } from "react-router-dom";
import  NavItem from "./Nav.js";
import "./navbar.css";
import { useState } from "react";


const Navbar = () => {

   const [name, setState] = useState(false)

  const  handleClick = () => {
        setState(current => !current )
    }

   return (
   
        <nav className="nav">
            <h2 className="nav-logo" style={name? { color :'rgba(0,0,0,.7)'}:{color: 'white'}}>
              O-Tour   
            </h2>

            <div className="menu-icon" onClick={handleClick}>
                <i className = {name ? "fa fa-times" : "fa fa-bars"}></i>
            </div>

            <div className = {name ? "nav-menu active ":"nav-menu"}>
            {NavItem.map((item,index) => {
                return (
                          
                       <li className="nav-list" key = {index}>
                            <Link  className = {item.cName}  to = {item.url}>
                                {item.title}
                            </Link>
                            </li>
                            
                    
                );
            })}
            <h2 className="nav-side ">
            <span className="aside">
                <a href = "/" className="log">Login </a>
                </span>

                <span className="aside">
                  <a href = "/"  className="span"> SignUp</a>
                </span>
                
                
              </h2>
        </div>
              
              </nav>

)
        }
export default Navbar;