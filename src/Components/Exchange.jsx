import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Container, HStack, VStack, Image,  } from '@chakra-ui/react'
import Loader from './Loader.jsx'
import ExchangeCard from './ExchangeCard'
import ErrorComponent from './ErrorComponent'



export default function Exchange() {

    const [exchanges, setExchanges]=useState([])
    const [loading, setLoading] =useState(true)
    const [error, setError] = useState('')

    useEffect(()=>{
        const fetchExchanges=async ()=>{
          try{
        

            const {data}= await axios.get('https://api.coingecko.com/api/v3/exchanges')
             setExchanges(data)
             setLoading(false)
             console.log(data)
          }catch(err){
            setError(true)
            setLoading(false)
            
          }
            
          
}
fetchExchanges()


    },[exchanges])

    if(error){
       return <ErrorComponent message={"error while fetching"}/>
     }


  
  return (
    <div>
        {/* <Container > */}
          
          {loading?<Loader/>:<>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>

            {
              exchanges.map((i)=>(
            <ExchangeCard  key={i.id}
            name={i.name} img={i.image} rank={i.trust_score_rank} url={i.url}/>

              )
              
              )
}
            
          </HStack>  
          </>}  

        {/* </Container> */}
      
    
      

    </div>
  )
}
