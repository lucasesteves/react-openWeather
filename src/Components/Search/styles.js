import styled from 'styled-components';

export const Title = styled.h1`
    font-size:44px;
    font-family:Roboto, sans-serif;
    color:#212121;
    text-align:center;
    margin:40px 24px 24px 24px;

    @media (max-width: 599px) {
      font-size:30px;
      margin:24px;
    }
`

export const Container = styled.div`
    display:flex;
    justify-content:center;
    margin:64px 24px;
`

export const InputText = styled.input`
  margin:0 auto;
  width:700px;
  height:60px;
  font-size:30px;
  border-radius:25px;
  border:2px solid #dedede;
  padding:0 24px;
  outline:none;
  color:#999;

  &:focus{
    border:2px solid #999;
  }

  @media (max-width: 600px) {
    width: 280px;
    font-size:24px;
    margin:24px;
  }

  @media (min-width: 601px) and (max-width:700px) {
    width: 440px;
  }

  @media (min-width: 701px) and (max-width:960px) {
    width: 640px;
  }

`

export const Button = styled.button`
  position: absolute;
  height:40px;
  width:40px;
  background:#fff;
  border-style:none;
  border-color:#fff;
  cursor: pointer;
  right: 24px;
  top: 12px;

  &:focus{
    outline:none;
  }

  @media (max-width: 600px) {
    top:36px;
    right:42px;
  }

`

export const Submit = styled.div`
  position: relative;
`

