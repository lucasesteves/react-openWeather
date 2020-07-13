import styled from 'styled-components';

export const Subtitle = styled.h2`
    display:flex;
    justify-content:center;
    font-size:32px;
    font-family:Roboto, sans-serif;
    margin-bottom:60px;
    margin-top:60px;

    @media (max-width: 599px) {
        margin:0 auto;
        font-size:24px;
        margin-bottom:24px;
    }
`

export const Container = styled.div`
    display:flex;
    flex-wrap: wrap;
`;
