import React from 'react';
import { Titulo } from '../../styles/project';
import { Container, ContainerInf, Available, Span, BtnAvailable, ContainerInfBtn } from '../../styles/form';
import { FirstTable, Th, Td } from '../../styles/table';
import { useState, useEffect } from 'react';
import { Picture } from '../../styles/table';

interface Product{
    name:string;
    productValue: number;
}

function Project() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [productValue, setProductValue] = useState(0);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect( () => {
        
    }, [products]) 

    const handleName = (event: React.ChangeEvent<HTMLInputElement> ) => {
        setName(event.target.value);
    }

    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    }

    const handleProductValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductValue(Number(event.target.value));
    }

    const setProduct = () => {
        const payload = {name, productValue}
        setProducts([...products,payload])
    }

    const orderByValue = () => {
        const payload = [...products.sort(function(a, b)
            {return a.productValue - b.productValue})   ] 
            setProducts(payload)
}

    return(
        <div>
            <Titulo> Lista de produtos </Titulo>
            <Container action=''>
            <ContainerInf onChange={handleName} value={name} placeholder='Digite o nome do produto'/>
            <ContainerInf onChange={handleDescription} value={description} placeholder='Digite a descrição do produto' />
            <ContainerInf onChange={handleProductValue} value={productValue} placeholder='Digite o valor do produto'/>
            <Available>
            <Span> Disponível para venda? </Span>
            <BtnAvailable type="button"> Sim </BtnAvailable>
            <BtnAvailable type="button"> Não </BtnAvailable>
            </Available>
            <ContainerInfBtn type="button" onClick={setProduct}> Cadastrar </ContainerInfBtn>
            </Container>            
            <FirstTable>
                   
            <thead>
                <tr>
                    <Th scope="col"> Nome </Th>
                    <Th scope="col"> Valor  <button onClick={orderByValue}> 
                        <Picture src='src\styles\images\two-ways.png'/>
                    </button></Th>
                </tr> 
            </thead>
  
            <tbody>
                 {products.length ? products.map((product: Product, i: number) => 
                <tr key={i}> 
                    <Td> {product.name} </Td>
                    <Td> {product.productValue} </Td>
                </tr>
                ):null} 
            </tbody>
        </FirstTable>

        </div>
    )
}

export default Project