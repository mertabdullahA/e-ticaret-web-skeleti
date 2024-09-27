import React from 'react';
import './css/Nav.css';
import { CiLogin } from "react-icons/ci";
import { BiSolidLike } from "react-icons/bi";
import { BsBasket } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";




function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">LOGO</div>

            <div className="search-bar">
                <IoSearchOutline className='input-icon' />

                < input type="text" placeholder=" Ürün, kategori, marka, model ara" />

            </div>
            <div className="nav-buttons">
                <button><CiLogin className='buton-icon' />
                    Giriş Yap</button>
                <button><BiSolidLike className='buton-icon' />
                    Favorilerim</button>
                <button className='basket'><BsBasket className='buton-icon-basket' />
                    Sepet</button>
            </div>
        </nav>
    );
}

export default Navbar;
