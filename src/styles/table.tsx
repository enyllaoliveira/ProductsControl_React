import styled from 'styled-components';

const FirstTable = styled.table`
font-family: 'Roboto', sans-serif;
margin: auto;
margin-top: 20px;
width: 100%;
border-collapse: collapse;
`
const Th = styled.th`
padding: 2px;
border: 1px solid #cecece;
text-align: center;
max-width:30px;
`

const Td = styled.td`
    padding: 10px;
    border: 1px solid #cecece;
    text-align: center;
`

const Picture = styled.img`
width: 20px`


export { FirstTable, Th, Td, Picture }