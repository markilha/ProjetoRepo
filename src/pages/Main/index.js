import React, { useState, useCallback } from 'react';
import { Container, Form, SumitButton } from './styles';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api'


export default function Main() {

    const [newRepo, setNewRepo] = useState('');
    const [respositorios, setRepositorios] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = useCallback((e) => {
        e.preventDefault();

        async function submit() {
            setLoading(true);
            try {
                const response = await api.get(`repos/${newRepo}`);
                const data = {
                    name: response.data.full_name,
                }
                setRepositorios([...respositorios, data]);
                setNewRepo('');
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        submit();
    }, [newRepo, respositorios]);

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
                    placeholder="Adicione Repositorios"
                    value={newRepo}
                    onChange={handleinputChange}
                />
                <SumitButton Loading={loading ? 1 : 0}>
                    {
                        loading ? (
                            <FaSpinner color="#FFF" size={14} />
                        ) : (<FaPlus color='#FFF' size={14} />
                        )}

                </SumitButton>
            </Form>
        </Container>

    )
}