import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';

export default function Repositorio({ match }) {
    const [repositorio, setRepositorio] = useState({});
    const [isssue, setIssues] = useState([]);

    useEffect(() => {
        async function load() {
            const nomeRepo = decodeURIComponent(match.params.repositorio);
            const [repositorioData, issuesData] = await Promise.all([
                api.get(`/repos/${nomeRepo}`),
                api.get(`/repos/${nomeRepo}/issues`,{
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ]);
           setRepositorio(repositorioData.data);
           setIssues(issuesData.data);
        }
        load();
    }, []);
    return (
        <Container>

        </Container>
    )
}