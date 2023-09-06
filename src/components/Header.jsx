import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
  return (
    <div className='head'>
        <nav>
           <Link to="/"> <a className='logo'>[EDUFREE]</a></Link>
            <div className="list">
                <ul>
                    {/* <li className='active'><Link to="/">HOME</Link></li>
                    <li><Link to="/tentang">TENTANG KAMI</Link></li>
                    <li><Link to="/kursus">KURSUS</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blog">BLOG</Link></li> */}

                    <li className='active'><a href="#jumbotron">HOME</a></li>
                    <li><a href="#tentang">TENTANG KAMI</a></li>
                    <li><Link to="/kursus">KURSUS</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                    <li><Link to="/blog">BLOG</Link></li>
                </ul>
                <a className='button'><Link to="/login">Login</Link></a>
            </div>   
        </nav>
    </div>
  )
}

export default Header