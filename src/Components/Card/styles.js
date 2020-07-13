import styled from 'styled-components';

export const Card = styled.div`
    height:200px;
    width:200px;
    border-radius:10px;
    border:2px solid #dedede;
    margin:0 20px;
    padding:10px;
    flex:1;

    &:hover{
        border-color:#999;
        box-shadow:3px 3px 3px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    @media (max-width: 600px) {
        margin-bottom:12px;
    }
`

export const Title = styled.h2`
    text-align:center;
    font-family:Roboto, sans-serif;
    font-size: 24px;
    margin:24px 0; 
`

export const Flex = styled.div`
    display:flex;
    justify-content:center;
`

export const Temp = styled.h1`
    font-family:Roboto, sans-serif;
    font-size:${props=> props.size}px;
    margin:0 10px;
`

export const Img = styled.img`
    height:70px;
    width:70px;
    margin-top:-10px;
`

export const Div = styled.div`
    margin-top:14px;
`

export const Degree = styled.div`
    font-family:Roboto, sans-serif;
    margin-top:5px;
`