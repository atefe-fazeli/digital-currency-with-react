import React, { useEffect, useState } from 'react';
import { GetCoin } from '../services/Getcoin';

const Landing = () => {
    const [coins,setCoins]=useState([]);
   
   useEffect(()=>{
      const fetchAPI=async()=>{
          const data =await GetCoin();
          setCoins(data);
      }
      fetchAPI();
   }   
   ,[])      
          
  
    return (
        <div>
         <input type="text"  placeholder="search..."></input> 
          { coins.map(coin =><p key={coin.id}>{coin.name }</p>)} 
        </div>
    );
};

export default Landing;