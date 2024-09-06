import { useState, useEffect } from 'react';
import CardsCarousel from './CardsCarousel';
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { Prize as premio } from "../../contexts/prizesContext.ts";
import api from '../../services/api.ts';
import { userAuth } from '../../AuthProvider/userAuth.tsx';
import ImageSlider from '../images/ImageSlider.tsx';

const Carousel = ({ current }: { current: number }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNextTransition, setIsNextTransition] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [newPrizes, setPrizes] = useState<premio[]>([])
  const auth = userAuth();


  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? newPrizes.length - 1 : prevIndex - 1));
    setIsNextTransition(false);
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === newPrizes.length - 1 ? 0 : prevIndex + 1));
    setIsNextTransition(true);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
  };



  useEffect(() => {
    // getPrizes();
    handleResize(); // Initial check
    // window.addEventListener("resize", handleResize);
    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };

    // console.log(isMobileView)
  }, []);

  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-8">
        {isMobileView ? (
          // <CardsCarousel prizes={newPrizes} isNextTransition={isNextTransition} currentImageIndex={currentImageIndex} isFirst={true} />
          ''
        ) : (
            <>
              <CardsCarousel prizes={[]} isNextTransition={isNextTransition} currentImageIndex={currentImageIndex} isFirst={true} />
            {/* <CardsCarousel prizes={newPrizes} isNextTransition={isNextTransition} currentImageIndex={currentImageIndex} isFirst={false} /> */}
          </>
        )}
      </div>

      <button
        className="absolute top-1/2 left-4 md:-left-16 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        onClick={goToPreviousImage}
      >
        <IoIosArrowRoundBack size={24} className="text-white" />
      </button>

      <button
        className="absolute top-1/2 right-4 md:-right-16 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full"
        onClick={goToNextImage}
      >
        <IoIosArrowRoundForward size={24} className="text-white" />
      </button>

    </div>
  );
};

export default Carousel;
