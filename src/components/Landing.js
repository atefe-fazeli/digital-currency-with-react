import React, { useState } from 'react';
import { GetCoin } from '../services/Getcoin';

const Landing = () => {
    const [coins,setCoins]=useState([]);
    const getAPI=()=>{
     setCoins(GetCoin());
    }
    
    return (
        <div>
            
        </div>
    );
};

export default Landing;