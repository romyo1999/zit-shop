import React from "react";
import "./style.css"
import { Link } from "react-router-dom";


const Footer=()=>{
    return(
<>
<React.Fragment>
            <footer>
                <div className="content mt-4">
                    <div className="top">
                        <div className="logo-details">
                            <i className="fab fa-slack"></i>
                            <span className="logo_name">ZIT-SHOP</span>
                        </div>
                        <div className="media-icons">
                            <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link to="#"><i className="fab fa-twitter"></i></Link>
                            <Link to="#"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </div>
                    <div className="link-boxes">
                        <ul className="box">
                            <li className="link_name">Company</li>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/contact">Contact us</Link></li>
                            <li><Link to="/aboutUs">About us</Link></li>
                            <li><Link to="/getStart">Get started</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Services</li>
                            <li><Link to="/Career">Career Opportunities</Link></li>
                            <li><Link to="/Selling">Selling Programs</Link></li>
                            <li><Link to="/advertise">Advertise</Link></li>
                            <li><Link to="/cop">Cooperation</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">Account</li>
                            <li><Link to="/profile">Profile</Link></li>
                            <li><Link to="/cart">My Cart</Link></li>
                            <li><Link to="/pursh">Purchase</Link></li>
                        </ul>
                        <ul className="box">
                            <li className="link_name">About Us</li>
                            <li><Link to="/policy">Privacy Policy</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/help">Help</Link></li>
                        </ul>

                    </div>
                </div>
                <div className="bottom-details">
                    <img src='/images/btm.jpg' className='w-100'/>
                </div>
            </footer>
        </React.Fragment>
</>
    )
}
export default Footer;
