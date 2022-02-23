import React, { useEffect, useState } from 'react';
import { GetCoin } from '../services/Getcoin';
import Curency from './Curency';

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
         <div>
          { coins.map((coin) =><Curency 
          key={coin.id} 
          name={coin.name}
          symbol={coin.symbol} 
          currentprice={coin.current_price} 
          image={coin.image}
          marketcap={coin.market_cap} 
          marketchange={coin.market_cap_change_24h}
          />)} 
          </div>
        </div>
    );
};

export default Landing;