import React from 'react';

import PlantItem from '../components/PlantItem';

import styles from './styles/ShopPage.module.css'

import items from '../data/itemsData.json'

export default function Shop() {

  const shopList = items.map(
    item => <PlantItem key={item.id} name={item.name} price={item.price} url={item.imageUrl} />
  );

  // console.log(shopList);

  return (
    <div>
      <div className={styles.shopContainer}>
        {shopList}
      </div>  
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo.
      </p>
    </div>
  );

}