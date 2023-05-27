import React from "react";
import ImageGallery from 'react-image-gallery';
import web1 from "./assets/images/web1.png";
import web2 from "./assets/images/web2.png";
import web3 from "./assets/images/web3.png";
import web4 from "./assets/images/web4.png";
import web5 from "./assets/images/web5.png";
import web6 from "./assets/images/web6.png";

export default function Carousel(){
    const images = [
        {
          original: web1,
          thumbnail: web2,
        },
        {
          original: web3,
          thumbnail: web4,
        },
        {
          original: web5,
          thumbnail: web6,
        },
      ];
    return (
        <>
        <ImageGallery items={images} />
        </>
    )
}