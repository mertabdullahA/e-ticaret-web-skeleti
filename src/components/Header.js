import './css/Header.css';

import { FaHeadset, FaTruck, FaPhone } from 'react-icons/fa';


function Header({ price }) {
    return (
        <>

            <div className="header">
                <div className="right-message">
                    Tüm siparişlerde kargo sadece <strong> {price} TL</strong>
                </div>
                <div className="left-links">
                    <a href="#"><FaHeadset className="icon" /> Destek</a>
                    <a href="#"><FaTruck className="icon" /> Sipariş Takip</a>
                    <a href="#"><FaPhone className="icon" /> 0850 811 11 21</a>
                </div>

            </div>

        </>
    )
}

export default Header