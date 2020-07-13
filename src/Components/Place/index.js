import React from 'react'
import { Card, Title, Flex, Temp, Img, Div, Degree } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons'

export default function Place(props){

    const handleWeather=(temp)=>{
        return Math.round(temp-273.15,0)
    }

    return(
        <Card>
            <Title>{props.name}</Title>
            <Div>
                <Flex>
                    <Temp size={100}>{handleWeather(props.temp)}</Temp><Degree>°C</Degree>
                    <Img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} />
                </Flex>
            </Div>
            <Div>
                <Flex>
                    <Flex>                    
                        <FontAwesomeIcon color={'#4E9DE6'} size={'2x'} icon={faLongArrowAltDown} />
                        <Temp size={30}>{handleWeather(props.min)}°C</Temp>
                    </Flex>
                    <Flex>
                        <FontAwesomeIcon color={'#ED6F56'} size={'2x'} icon={faLongArrowAltUp} />
                        <Temp size={30}>{handleWeather(props.max)}°C</Temp>
                    </Flex>
                </Flex>
            </Div>
        </Card>
    )
}