
import './css/products.css'
import { CiHeart } from "react-icons/ci";



const Products = ({ product }) => {
    return (

        <>

            <div className="product-card">
                <div className="heart-icon">
                    <CiHeart />

                </div>

                <img src={product.imageUrl} alt={product.name} />
                <h2>{product.name}</h2>
                <p>{product.description}</p>

                <p className='beferoprice'><del>530,00 TL</del> </p>
                <p className='price'>{product.price} TL</p>


            </div>

        </>
    );
};

export default Products