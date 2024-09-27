import React, { useState } from 'react';
import './css/DropdownMenu.css';
import { FaArrowRight } from "react-icons/fa";

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState(null);

    const toggleMenu = (menuId) => {
        setActiveMenu(activeMenu === menuId ? null : menuId); // Aynı menüye tıklanırsa kapat
    };

    const handleMouseEnter = (menuId) => {
        setActiveMenu(menuId);
    };

    const handleMouseLeave = () => {
        setActiveMenu(null);
    };

    return (
        <div className="drop">
            <div className='ust-menu'>
                <ul>
                    <li>
                        <a onMouseEnter={() => handleMouseEnter(1)} onMouseLeave={handleMouseLeave}>
                            KADIN
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(2)} onMouseLeave={handleMouseLeave}>
                            ERKEK
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(3)} onMouseLeave={handleMouseLeave}>
                            ÇOCUK
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(4)} onMouseLeave={handleMouseLeave}>
                            VALİZ
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(5)} onMouseLeave={handleMouseLeave}>
                            AYAKKABI
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(6)} onMouseLeave={handleMouseLeave}>
                            CÜZDAN
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(7)} onMouseLeave={handleMouseLeave}>
                            MARKALAR
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(8)} onMouseLeave={handleMouseLeave}>
                            İNDİRİM
                        </a>
                        <a onMouseEnter={() => handleMouseEnter(9)} onMouseLeave={handleMouseLeave}>
                            LOOK
                        </a>
                    </li>
                </ul>
            </div>

            {activeMenu === 1 && (
                <>
                    <div className="overlay" onMouseLeave={handleMouseLeave}></div>
                    <div className="menu">
                        <div className="menu-column">
                            <h1>Çanta</h1>
                            <ul>

                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className="menu-column">
                            <h1>Heading</h1>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className="menu-column">
                            <h1>Heading 3</h1>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className='kutu'>
                            <h1><strong>Kadın</strong></h1>
                            <a href='#'>Tüm Ürünler <FaArrowRight className='arrowicon' /></a>
                            <div className="image-container">
                                <img src="https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/45867/uploads/urunresimleri/buyuk/kapusonlu-spor-elbise-83e1-2.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </>
            )}

            {activeMenu === 2 && (
                <>
                    <div className="overlay" onMouseLeave={handleMouseLeave}></div>
                    <div className="menu">
                        <div className="menu-column">
                            <h1>Heading 1</h1>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className="menu-column">
                            <h1>Heading</h1>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className="menu-column">
                            <h1>Heading 3</h1>
                            <ul>
                                <li><a href="#">Link 1</a></li>
                                <li><a href="#">Link 2</a></li>
                                <li><a href="#">Link 3</a></li>
                                <li><a href="#">Link 4</a></li>
                                <li><a href="#">Link 5</a></li>
                                <li><a href="#">Link 6</a></li>
                                <li><a href="#">Link 7</a></li>
                            </ul>
                        </div>

                        <div className='kutu'>
                            <h1><strong>Kadın</strong></h1>
                            <a href='#'>Tüm Ürünler <FaArrowRight className='arrowicon' /></a>
                            <div className="image-container">
                                <img src="https://static.ticimax.cloud/cdn-cgi/image/width=540,quality=85/45867/uploads/urunresimleri/buyuk/kapusonlu-spor-elbise-83e1-2.jpg" alt="Image" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default DropdownMenu;
