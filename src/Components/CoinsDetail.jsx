import React from 'react'
import { useState , useEffect} from 'react'
import { Container , Box, Radio, RadioGroup, VStack , Text, StatLabel, StatNumber, StatHelpText, StatArrow, Badge, Button} from '@chakra-ui/react'
import Loader from './Loader'
import axios from 'axios'
import {useParams}from 'react-router-dom'
import ErrorComponent from './ErrorComponent'
import { HStack , Image , Stat, } from '@chakra-ui/react'
 import CustomBar from './CustomBar'
 import Item from './Item'
 import Chart from './Chart'

export default function CoinsDetail(props) {
  const [coin, setCoin]=useState([])
    const [loading, setLoading] =useState(true)
    const [page, setPage] = useState(3)
    const [currency, setCurrency] = useState("inr");
    const [error, setError]= useState('');
const [days, setDays]=useState("24h")
const [chartArray, setChartArray]= useState([])
    const currencySymbol =  currency==="inr" ? "र": currency==="eur" ?  "€" :"$"
    const btns=["24h","7d", "14d","60d","200d",'1yr',"max"]
       const params= useParams();

const switchStat=(key)=>{
  switch(key){
    case '24h':
      setDays('24h');
     
    break;
    
    case '7d':
      setDays('7d');
   break;
    case '14d':
setDays('14d');

    break;
    case '60d':
      setDays('60d');
  
    break;
    case '200d':
    
      setDays('200d');
      
    
    break;
    case '1yr':
      
      
      setDays('1yr');
      
  
    break;
    case 'max':
      setDays('max')
      break;
    
    default :
    
    setDays('24h');
    
    
    break;
  }

}


    useEffect(()=>{
      const fetchCoin=async ()=>{
        try{
      

          const {data}= await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}`)
          const {data:chartData}= await axios.get(`https://api.coingecko.com/api/v3/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`)
         
          setCoin(data)
          setLoading(false)
          setChartArray(chartData.prices)
          //  setLoading(false)
        }catch(error){
           setError(true)
          setLoading(false)
          
        }
          
        
}
fetchCoin()


  },[params.id, currency, days])

  if(error) return <ErrorComponent message={"error while fetching"}/>


  return (
    <div>
    
     <Container maxW={'container.xl'}>
    
        {

loading ? (<Loader />):<>
(
  <Box borderWidth={1} >
    <Chart arr={chartArray} currency={currencySymbol}  days={days} />
  </Box>
  <HStack p={'4'} wrap={"wrap"} overflowX={'auto'}>
     {
      btns.map((i)=>(
      <Button key={i} onClick={()=>switchStat(i)}> {i}</Button>
      
      ))
    } 

  </HStack>

  <RadioGroup value={currency} onChange={setCurrency} p={'8'}> 
            <HStack spacing={'4'}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={'eur'}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <VStack spacing={'4'} p={'16'} alignItems={'flex-start'}  >
            <Text fontSize={'small'} alignSelf={'center'} opacity={0.7}>
                  

                  Last Updated on {" "}
                  {Date (coin.market_data.last_updated).split('G')[0]}



               </Text>
          <Image src={coin.image.large} w={'16'} h={'16'} objectFit={'contain'}/>

        <Stat>
          <StatLabel>{coin.name}</StatLabel>
          <StatNumber>{currencySymbol}{coin.market_data.current_price[currency]}</StatNumber>
          <StatHelpText>
            <StatArrow  type={coin.market_data.price_change_percentage_24h >0 ? "increase" : "decrease"}/>
            {coin.market_data.price_change_percentage_24h}
          </StatHelpText>
        </Stat>
        <Badge fontSize={'2xl'} bgColor={'blackAlpha.700'} color={'white'}>
          {`${coin.market_cap_rank}`}

        </Badge>
        <CustomBar high={`${currencySymbol}${coin.market_data.high_24h[currency]}`} low={`${currencySymbol}${coin.market_data.high_24h[currency]}`}/>

        <Box w={'full'} p={'4'} > 


        <Item title={"Max Supply"} value={coin.market_data.max_supply}/>
        <Item title={"Circulating supply"} value={coin.market_data.circulating_supply}/>
        <Item title={"Market cap"} value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}/>
        <Item title={"All time High"} value={`${currencySymbol}${coin.market_data.ath[currency]}`}/>
        <Item title={"All time Low"} value={`${currencySymbol}${coin.market_data.atl[currency]}`}/>

        

        </Box>
          </VStack>
)
</>
}

</Container>




      </div>

  



  
  )
  
}


