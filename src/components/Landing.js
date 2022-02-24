import React, { useEffect, useState } from 'react';
import { GetCoin } from '../services/Getcoin';
import Curency from './Curency';
import Loader from './Loader';

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
     const[search,setSearch]=useState("");     
    const changeHandler=(event)=>{
     setSearch(event.target.value)
     console.log(search)
    
     }  
     const trueSearch=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))   
  
    return (
       <>
         <input type="text"   placeholder="search..." onChange={changeHandler}></input> 
        
          { coins.length  ?
          <div>
            {
              trueSearch.map((coin) =><Curency 
              key={coin.id} 
              name={coin.name}
              symbol={coin.symbol} 
              currentprice={coin.current_price} 
              image={coin.image}
              marketcap={coin.market_cap} 
              marketchange={coin.market_cap_change_24h}
            />)
          }
            </div>
        : <Loader />
      } 
          
       </>
    );
};

export default Landing;