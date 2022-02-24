import React from 'react';
import Lottie from 'react-lottie';
import lottie from "react-lottie";
import loadingData from "../loading-car.json"

const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: loadingData,
      };
    return (
        <div>
           <Lottie
           options={defaultOptions}
           width={400}
           height={400}
           />
        </div>
    );
};

export default Loader;