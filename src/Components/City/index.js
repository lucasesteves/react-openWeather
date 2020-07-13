import React, { useEffect,useContext, useState } from 'react'
import { Subtitle, Container } from './styles'
import Card from '../Card'
import Context from '../../Reducer/context'
import api from '../../Services/api'
import Loading from '../Loading'
import MapContainer from '../Map'
import Place from '../Place'

export default function City(){
    const { state } = useContext(Context);
    const [loading, setLoading] = useState(false);
    const [data,setData]=useState({})

    useEffect(()=>{
        setLoading(true)
        getData(state.city)
    },[state.city])

    const getData=async(city)=>{
        const place = city.replace(' ','+')
        const result = await api.get(`data/2.5/weather?q=${place}&appid=93dec6639288ca8983c1d9a803323cc6`)
        console.log(result.data)
        setData(result.data)
        setLoading(false)
    }

    return(
        <>
            {state.city!='' ?
            <div>
                {loading ?
                    <Loading load={loading} />   
                :
                    <Container>
                        <Place 
                            name={data.name}
                            icon={data.weather[0].icon}  
                            temp={data.main.temp} 
                            max={data.main.temp_max} 
                            min={data.main.temp_min} 
                        />
                        <MapContainer coord={data.coord} />
                    </Container>
                }
            </div>
            :
            <div style={{margin:24}}>
                <Subtitle>{state.city=='' ? 'Sugestões de Cidades' : state.city }</Subtitle>
                <Container>
                    <Card place={'Tokyo'} />
                    <Card place={'London'} />
                    <Card place={'Brasilia'} />
                    <Card place={'Dubai'} /> 
                </Container>  
            </div>
            }   
        </>
    )
}