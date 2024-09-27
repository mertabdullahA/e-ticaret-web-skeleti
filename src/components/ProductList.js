
import products from './Data';
import ProductCard from './Products';
import './css/ProductList.css';
import React, { useState } from 'react';
import { IoIosStar } from "react-icons/io";
import { FaRegStar } from "react-icons/fa6";




const ProductList = () => {


    const [selectedCategory, setSelectedCategory] = useState('All');
    const filteredProducts = selectedCategory === 'All'
        ? products
        : products.filter(product => product.category === selectedCategory);

    return (
        <>


            <h1 className='baslık'>Öne Çıkan Ürünler</h1>
            <div className='butonlar'>
                <button onClick={() => setSelectedCategory('All')} className='butons active'>Yeni Gelenler</button>
                <button onClick={() => setSelectedCategory('Spor')} className='butons'>Spor Dönemi</button>
                <button onClick={() => setSelectedCategory('Laptop')} className='butons'>Laptop Çantaları</button>
                <button onClick={() => setSelectedCategory('Çanta')} className='butons'>Sırt Çantaları</button>

            </div>
            <div className="product-list">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className='imgçizgi'>
                            <div className='çizgi1'></div>
                            <div className='çizgi1'></div>
                            <div className='çizgi1'></div>
                            <div className='çizgi1'></div>
                            <div className='çizgi1'></div> </div>
                        <h3 className='productname'>{product.name}</h3>
                        <p className='productdescription'>{product.description}</p>
                        <p className='puan'> <strong>4.5</strong>
                            <div className='star'>
                                <IoIosStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />
                                <FaRegStar />



                            </div> </p>
                        <div className='hizalama'>
                            <div className='sale'>
                                <p className='sale-p'>%15</p>
                            </div>
                            <p className='before-price'><del>320.00 TL</del> </p>
                            <p className='pruduct-price'>{product.price} TL</p>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
};

export default ProductList;
