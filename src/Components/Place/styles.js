import styled from 'styled-components';

export const Card = styled.div`
    height:380px;
    width:200px;
    margin:0 20px;
    padding:10px;
    flex:1;
    color:#fff;
    background-image: ${props=>props.time==='d' ? 
        `linear-gradient(to top, #A86FA1, #8B52A1)` : `linear-gradient(to top, #114F92, #0F347A)`
    };
    box-shadow:3px 3px 3px rgba(0, 0, 0, 0.1);

    &:hover{
        border-color:#999;
        cursor: pointer;
    }

    @media (max-width: 600px) {
        margin-bottom:12px;
    }
`

export const Title = styled.h2`
    text-align:center;
    font-family:Roboto, sans-serif;
    font-size: 44px;
    margin:24px 0;
    
`

export const Flex = styled.div`
    display:flex;
    justify-content:center;
`

export const Temp = styled.h1`
    font-family:Roboto, sans-serif;
    font-size:${props=> props && `${props.size}px`};
    margin:0 10px;
    margin-top:${props=>props && `${props.top}px`};
`

export const Img = styled.img`
    height:180px;
    width:180px;
    margin-top:-10px;
`

export const Div = styled.div`
    margin-top:14px;
`

