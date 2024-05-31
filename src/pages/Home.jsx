import React from 'react';

//This seems to be the only way to get React to load an image?
import HomeImage from '../images/HomeImage.png';



export default function Home() {

  return (
    <div>
      <h2>Bring your home to life.</h2>
      <p>Elevate your living space with a touch of nature.We offer a range of easy-care houseplants.</p>
      <button>Browse Plants</button>
      <br/>

      <img src={HomeImage} alt={"Living area with plants"} width={247} height={328.47}/>
    </div>  
  );

}