import React, {useState,useEffect, useContext} from 'react'
import { Card, Title, Flex, Temp, Img, Div, Degree } from './styles'
import api from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading'

export default function CardComponent(props){
    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        getData()
    },[])
    
    const getData = async ()=>{
        setLoading(true)
        const result = await api.get(`data/2.5/weather?q=${props.place}&appid=93dec6639288ca8983c1d9a803323cc6`)
        setData(result.data) 
        setLoading(false)
        console.log(result.data)
    }

    const handleWeather=(temp)=>{
        return Math.round(temp-273.15,0)
    }
        
    return(
        <Card right={props.right} left={props.left}>
            {!loading ? <>
                <Title>{data && data.name}</Title>
                <Div>
                    <Flex>
                        <Temp size={30}>{handleWeather(data.main && data.main.temp)}</Temp><Degree>°C</Degree>
                        <Img src={`http://openweathermap.org/img/wn/${data.weather && data.weather[0].icon}@2x.png`} />
                    </Flex>
                </Div>
                <Div>
                    <Flex>
                        <Flex>                    
                            <FontAwesomeIcon color={'#4E9DE6'} icon={faLongArrowAltDown} />
                            <Temp size={14}>{handleWeather(data.main && data.main.temp_min)}°C</Temp>
                        </Flex>
                        <Flex>
                            <FontAwesomeIcon color={'#ED6F56'} icon={faLongArrowAltUp} />
                            <Temp size={14}>{handleWeather(data.main && data.main.temp_max)}°C</Temp>
                        </Flex>
                    </Flex>
                </Div>
            </>:
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"}}><Loading load={loading} /></div>
            }
        </Card>
    )
}