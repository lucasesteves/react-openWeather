import React, {useState,useEffect, useContext} from 'react'
import { Card, Title, Flex, Temp, Img, Div } from './styles'
import api from '../../Services/api'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'
import Loading from '../Loading'
import Context from '../../Reducer/context'
import PropTypes from 'prop-types';

export default function CardComponent(props){

    const { place } = props;

    CardComponent.propTypes={
        place:PropTypes.string.isRequired
    }

    const [data,setData]=useState([])
    const [loading,setLoading]=useState(false)
    const [time,setTime] = useState('d');
    const { dispatch } = useContext(Context);

    useEffect(()=>{
        const getData = async () => {
            setLoading(true)
            const result = await api.get(`data/2.5/weather?q=${place}&appid=${process.env.REACT_APP_WEATHER}`)
            setData(result.data)
            console.log(result.data.sys.country)
            const final = result.data.weather[0].icon.slice(2)
            setTime(final)            
            setLoading(false)
        }
        getData()
    },[place])
    

    const handleWeather=(temp)=>{
        return Math.round(temp-273.15,0)
    }

    const submit = (place) =>{
        dispatch({ type: "SEARCH_PLACE", payload: place });
    }
        
    return(
        <Card time={time} onClick={()=>submit(place)}>
            {!loading ? <>
                <Title>{data && data.sys && `${data.name}, ${data.sys.country}`}</Title>
                <Div>
                    <Flex>
                        <Temp top={10} size={30}>{handleWeather(data.main && data.main.temp)}°</Temp>
                        <Img src={`http://openweathermap.org/img/wn/${data.weather && data.weather[0].icon}@2x.png`} />
                    </Flex>
                </Div>
                <Div>
                    <Flex>
                        <Flex>                    
                            <FontAwesomeIcon color={'#4E9DE6'} icon={faLongArrowAltDown} />
                            <Temp size={14}>{handleWeather(data.main && data.main.temp_min)}°</Temp>
                        </Flex>
                        <Flex>
                            <FontAwesomeIcon color={'#ED6F56'} icon={faLongArrowAltUp} />
                            <Temp size={14}>{handleWeather(data.main && data.main.temp_max)}°</Temp>
                        </Flex>
                    </Flex>
                </Div>
            </>:
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"200px"}}><Loading load={loading} /></div>
            }
        </Card>
    )
}