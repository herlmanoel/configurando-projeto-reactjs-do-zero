import React, { useState } from 'react';

// não utlizamos o push, temos que recriar as variáveis - IMUTABILIDADE -
// não altera, recria
import './App.css';

export const App = () => {
    const [projects, setProjects] = useState([]);

    return (
    <>
        <h1>Projects</h1>
        <br />
        <ul>
            {projects.map(item => {
                return <li> {item} </li>
            })}
        </ul>
        <br />
        <button onClick={() => setProjects([ ...projects, `nome ${Date.now()}` ])}>Cadastrar</button>
    </>
    );
} 