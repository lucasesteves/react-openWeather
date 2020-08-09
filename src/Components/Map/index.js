import React, {useState} from 'react'
import ReactMapGL, { Marker } from "react-map-gl";
import { Container } from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

export default function MapContainer(props){
    
    const { coord } = props;

    MapContainer.propTypes ={
        coord: PropTypes.object.isRequired,
    }
    
    const INITIAL_VIEWPORT={
        latitude:coord.lat,
        longitude:coord.lon,
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
                latitude={coord.lat}
                longitude={coord.lon}
            >
                <FontAwesomeIcon color={'#ED6F56'} size={'2x'} icon={faMapPin} />
            </Marker>
            
            </ReactMapGL>
      </Container>
    )
}