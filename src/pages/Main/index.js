import React, { useState, useCallback } from 'react';
import { Container, Form, SumitButton } from './styles';
import { FaGithub, FaPlus } from 'react-icons/fa';
import api from '../../services/api'


export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [respositorios, setRepositorios] = useState([]);

    const handleSubmit = useCallback((e) => {
        e.preventDefautl();
      async function submit(){       
        const response = await api.get(`repos/${newRepo}`);
        const data = {
            name: response.data.full_name,
        }
        setRepositorios([...respositorios, data]);
        setNewRepo('');
      }
      submit();
    }, [newRepo,respositorios]);

    function handleinputChange(e) {
        setNewRepo(e.target.value);
    }

    return (
        <Container>
            <h1>
                <FaGithub size={25} />
                Meus Repositorios
            </h1>
            <Form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Adicione Repositorio"
                    value={newRepo}
                    onChange={handleinputChange}
                />
                <SumitButton>
                    <FaPlus color='#FFF' size={14} />
                </SumitButton>
            </Form>
        </Container>

    )
}