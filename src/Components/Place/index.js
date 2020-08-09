import React from 'react';
import { Card, Title, Flex, Temp, Img, Div } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltDown, faLongArrowAltUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function Place(props){

    const { name, country, temp, min, max, icon, time } = props;

    Place.propTypes={
        name:PropTypes.string.isRequired,
        country:PropTypes.string.isRequired,
        temp:PropTypes.number.isRequired,
        min:PropTypes.number.isRequired,
        max:PropTypes.number.isRequired,
        icon:PropTypes.string.isRequired,
        time:PropTypes.string.isRequired,
    }

    const handleWeather=(temp)=>{
        return Math.round(temp-273.15,0)
    }

    return(
        <Card time={time}>
            <Title>{name}, {country}</Title>
            <Div>
                <Flex>
                    <Temp top={30} size={100}>{handleWeather(temp)}°</Temp>
                    <Img src={`http://openweathermap.org/img/wn/${icon}@4x.png`} />
                </Flex>
            </Div>
            <Div>
                <Flex>
                    <Flex>                    
                        <FontAwesomeIcon color={'#4E9DE6'} size={'2x'} icon={faLongArrowAltDown} />
                        <Temp size={30}>{handleWeather(min)}°</Temp>
                    </Flex>
                    <Flex>
                        <FontAwesomeIcon color={'#ED6F56'} size={'2x'} icon={faLongArrowAltUp} />
                        <Temp size={30}>{handleWeather(max)}°</Temp>
                    </Flex>
                </Flex>
            </Div>
        </Card>
    )
}