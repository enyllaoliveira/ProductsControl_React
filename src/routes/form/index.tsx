import { Container, ContainerInf, Available, Span, BtnAvailable, ContainerInfBtn } from '../../styles/form';

function Form() {
return (
    <div>
        <Container>
        <ContainerInf placeholder='Digite o nome do produto'/>
        <ContainerInf placeholder='Digite a descrição do produto' />
        <ContainerInf placeholder='Digite o valor do produto'/>
        <Available>
        <Span> Disponível para venda? </Span>
        <BtnAvailable> Sim </BtnAvailable>
        <BtnAvailable> Não </BtnAvailable>
        </Available>
        <ContainerInfBtn type='submit'> Cadastrar </ContainerInfBtn>
        </Container>
    </div>
)

}

export default Form