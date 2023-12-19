import React, { useEffect, useState } from 'react'
import axios, { HttpStatusCode } from 'axios'
import { HStack, Button, RadioGroup, Radio } from '@chakra-ui/react'
import Loader from './Loader.jsx'
import ErrorComponent from './ErrorComponent'
import CoinCard from './CoinCard.jsx'



export default function Coins() {

    const [coins, setCoins]=useState([])
    const [loading, setLoading] =useState(true)
    const [page, setPage] = useState(3)
    const [currency, setCurrency] = useState("inr")



    const currencySymbol= currency==="inr"? '₹':currency==='eur'?'€':'$';

    const btns = new Array(132).fill(1)



    const changePage=(page)=>{
setPage(page);
setLoading(true)
    }
    useEffect(()=>{
        const fetchCoins=async ()=>{
          try{
        

            const {data}= await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&locale=en`)
             setCoins(data)
             setLoading(false)
             console.log(data)
          }catch(err){
             
            setLoading(true)
            
          }
            
          
}
fetchCoins()


    },[currency,page])
    





    //  if(Error){
    //    return <ErrorComponent message={"error while fetching"}/>
    //  }


  
  return (
    <div>
        {/* <Container > */}
          
          {loading?<Loader/>:<>


          <RadioGroup value={currency} onChange={setCurrency} p={'8'}> 
            <HStack spacing={'4'}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>

            {
              coins.map((i)=>(
            <CoinCard id={i.id} key={i.id}
            name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url} symbol={i.symbol} price={i.current_price} currencySymbol={currencySymbol}/>

              )
              
              )
}
            
          </HStack>  
          <HStack w={'full'} overflowX={'auto'} p={'8'}>
          {
            btns.map((item, index)=>(
            
              <Button  key ={index} bg={'blackAlpha.900'} color={'white'} onClick={()=>{
                
                changePage(index+1)
              }}>{index+1}</Button>
            ))
          }
          
          </HStack>
          </>
}
        {/* </Container> */}
      
    
      

    </div>
  )
}

