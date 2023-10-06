import styled from 'styled-components';

const Container = styled.form`
display: flex;
flex-direction: column;
`
const ContainerInf = styled.input`
padding: 8px;
margin: auto;
margin-bottom: 15px;
border-radius: 8px;
border: 1px solid #cecece;
text-align: center;
width: 80%;
`
const Available = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;
`
const Span = styled.span`
color: #31493c;
font-size: large;
`

const BtnAvailable = styled.button`
cursor: pointer;
width: 130px;
padding: 8px;
margin-left: 10px;
border-radius: 5px;
border: 1px solid #cecece;
&:focus{
    background-color: #62992f;
    color: white;
}
`

const ContainerInfBtn = styled.button`
cursor: pointer;
width: 160px;
padding: 8px;
border-radius: 8px;
border: 1px solid #cecece;
margin: auto;
`

export {Container, ContainerInf, Available, Span, BtnAvailable, ContainerInfBtn }