import React, { Component } from 'react';


//View this as a Class
const PlantItem = ({name, price, url}) => {
    
    // const {name, price, url} = props;
    
    return ( 
        <div>
            <div>
                <img src={url} alt={name}/>
            </div>
            <h2>{name}</h2>
            <p>£{price.toFixed(2)}</p>
        </div>
    );
}

export default PlantItem;