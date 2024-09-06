import { useState } from "react";

const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "32px",
    fontSize: "45px",
    color: "green",
    zIndex: 1,
    cursor: "pointer",
};

const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "32px",
    fontSize: "45px",
    color: "green",
    zIndex: 1,
    cursor: "pointer",
};

const sliderStyles = {
    position: 'relative',
    height: '100%',
};

const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
};

const dotStyle = {
    margin: "0 3px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "20px",
};

const imagePrize = {
    height: 311,
    width: 271
};


interface Props {
    slides: any;
}

const ImageSlider = ({ slides }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImage, setcurrentImage] = useState(slides[currentIndex].foto);

    const goToPrevious = () => {
        console.log(currentIndex)
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        setcurrentImage(slides[currentIndex].url)
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setcurrentImage(slides[currentIndex].foto)
    };
    const goToSlide = (slideIndex: number) => {
        setcurrentImage(slides[currentIndex].foto)
        setCurrentIndex(slideIndex);
    };
    const slideStylesWidthBackground = {
        ...slideStyles,
        backgroundImage: `url(${currentImage}`,
    };

    return (
        <div style={sliderStyles}>
            <div>
                <div onClick={goToPrevious} style={leftArrowStyles}>
                    ❰
                </div>
                <div onClick={goToNext} style={rightArrowStyles}>
                    ❱
                </div>
            </div>
            <img src={currentImage} style={imagePrize} />
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
                {slides.map((slide, slideIndex) => (
                    <div
                        style={dotStyle}
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                    >
                        ●
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;