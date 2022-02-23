import React from 'react';

const Curency = ({image,name,symbol,currentprice,marketcap,marketchange}) => {
    return (
        <div>
            <img src={image} alt="loading" />
                <span>{name}</span>
                <span>{symbol}</span>
                <span>{currentprice}</span>
                <span>{marketcap}</span>
                <span>{marketchange}</span>
          
            
        </div>
    );
};

export default Curency;