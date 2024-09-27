import React, { useState } from "react";
import './css/Slider.css';  // Import your CSS for styling

const Slider = () => {
    // Array of images for the slider
    const sliderImages = [
        "https://via.placeholder.com/600x300?text=Image+1",
        "https://via.placeholder.com/600x300?text=Image+2",
        "https://via.placeholder.com/600x300?text=Image+3",
        "https://via.placeholder.com/600x300?text=Image+4",
        "https://via.placeholder.com/600x300?text=Image+5"
    ];
    const sliderData = [
        {
            id: 1,
            text: "İlk Slide Metni",
            image: "https://via.placeholder.com/800x400.png?text=Slide+1"
        },
        {
            id: 2,
            text: "İkinci Slide Metni",
            image: "https://via.placeholder.com/800x400.png?text=Slide+2"
        },
        {
            id: 3,
            text: "Üçüncü Slide Metni",
            image: "https://via.placeholder.com/800x400.png?text=Slide+3"
        },
        {
            id: 4,
            text: "Dördüncü Slide Metni",
            image: "https://via.placeholder.com/800x400.png?text=Slide+4"
        },
        {
            id: 5,
            text: "Beşinci Slide Metni",
            image: "https://via.placeholder.com/800x400.png?text=Slide+5"
        }
    ];
    const [currentSlide, setCurrentSlide] = useState(0);

    // Function to handle the click on circles
    const handleCircleClick = (index) => {
        setCurrentSlide(index);  
    };

    return (
        <div className="slider-container">
            <div className="slider">
                <img src={sliderImages[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
                <h1>Slider</h1>
            </div>

            <div className="circle-container">
                {sliderImages.map((_, index) => (
                    <div
                        key={index}
                        className={`circle ${currentSlide === index ? "active" : ""}`}
                        onClick={() => handleCircleClick(index)}
                    >
                        <img
                            src={`https://via.placeholder.com/50?text=${index + 1}`}
                            alt={`Circle ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;
