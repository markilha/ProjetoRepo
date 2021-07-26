import React from 'react';
import { Container, Form,SumitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa'

export default function Main() {
    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>
            <Form onSubmit={()=>{}}>
                <input type="text" placeholder="Adicione Repositorio"/>
                <SumitButton>
                    <FaPlus color='#FFF' size={14}/>
                </SumitButton>
            </Form>
        </Container>

    )
}