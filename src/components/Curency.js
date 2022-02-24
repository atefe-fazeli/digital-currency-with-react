import React from 'react';
import styles from "./Styles.module.css";

const Curency = ({image,name,symbol,currentprice,marketcap,marketchange}) => {
    return (
        <div className={styles.container}>
            <img  src={image} alt="loading" />

                <span>{name}</span>
                <span>{symbol.toUpperCase()}</span>
                <span>{currentprice.toLocaleString()}</span>
                <span>{marketcap.toLocaleString()}</span>
                <span>{marketchange}</span>
          
            
        </div>
    );
};

export default Curency;