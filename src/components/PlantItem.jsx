import React from 'react';

import styles from './styles/PlantItem.module.css'

//View this as a Class
const PlantItem = ({name, price, url}) => {
    
    // const {name, price, url} = props;
    
    return ( 
        <div className={styles.plantCard}>
            <img src={url} alt={name} width={152} height={190}/>
            <h2 className={styles.itemName}>{name}</h2>
            <p className={styles.price}>£{price.toFixed(2)}</p>
            <button className={styles.cartButton}>Add to Cart</button>
        </div>
    );
}

export default PlantItem;