import React, {useState} from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import { Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'

export default function MapContainer(props){
    const INITIAL_VIEWPORT={
        latitude:props.coord.lat,
        longitude:props.coord.lon,
    }
    
    const [viewport, setViewport]= useState(INITIAL_VIEWPORT)
    return(
        <Container>
            <ReactMapGL
                width="100%"
                height="100%"
                zoom={5}
                mapStyle="mapbox://styles/mapbox/streets-v10"
                mapboxApiAccessToken="pk.eyJ1IjoiYWRlcm5pbyIsImEiOiJja2Nqb29qMG8xaTY4MnBvMzB3N29jMDg3In0.d3JLxGXmQ_sYNI6gK3nldw"
                onViewportChange={position=>setViewport(position)}
                {...viewport}
            >
            <Marker
                latitude={props.coord.lat}
                longitude={props.coord.lon}
                // offsetLeft={-19}
                // offsetTop={-37}
            >
                <FontAwesomeIcon color={'#ED6F56'} size={'2x'} icon={faMapPin} />
            </Marker>
            
            </ReactMapGL>
      </Container>
    )
}