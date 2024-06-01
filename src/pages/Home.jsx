import React from 'react';

//CSS
import styles from './styles/HomePage.module.css'

//This seems to be the only way to get React to load an image?
import HomeImage from '../images/HomeImage.png';



export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={styles.subhead}>Bring your home to life.</h2>
        <p className={styles.p1text}>Elevate your living space with a touch of nature. We offer a range of easy-care houseplants.</p>
        <button className={styles.button}>Browse Plants</button>
      </div>
      <div>
        <img className={styles.imageContent} src={HomeImage} alt={"Living area with plants"} width={247} height={328.47}/>
      </div>
    </div>  
  );

}