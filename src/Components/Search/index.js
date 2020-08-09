import React, { useState, useContext } from 'react'
import { Title, Container, InputText, Button, Submit } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Context from '../../Reducer/context'

export default function Search(){
    const [search,setSearch]=useState('')
    const { dispatch } = useContext(Context);

    const submit=()=>{
        if(search!==''){
            dispatch({ type: "SEARCH_PLACE", payload: search });
        }
        else{
            dispatch({ type: "SEARCH_PLACE", payload: '' });
        }
    } 
    
    const handleKeyDown = (event) => {
        event.key==='Enter' && submit()
    };

    return(
        <>
            <Title>React OpenWeather</Title>
            <Container>
                <Submit>
                    <InputText type="text" placeholder="Ex: Rio de Janeiro" onChange={(e)=>setSearch(e.target.value)} onKeyDown={handleKeyDown} />
                    <Button onClick={submit}><FontAwesomeIcon style={{height:35,width:35}} color={'#999'} icon={faSearch} /></Button>
                </Submit>
            </Container>
        </>
    )
}