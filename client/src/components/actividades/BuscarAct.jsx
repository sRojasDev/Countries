import React, { useState } from 'react';



function BuscarAct() {  
    const modeloFamiliar = { nombre: '' };
    const [familiar, setFamiliar] = useState([
        { ...modeloFamiliar },
    ]);

    const [persona, setPersona] = useState({
    nombre: '',
    });

    const agregaFamiliar = () => {
        setFamiliar([...familiar, { ...modeloFamiliar }]);
    };

    const handlePersonaChange = (e) => setPersona({
        ...persona,
        [e.target.name]: e.target.value,
    });

    const handleFamiliarChange = (e) => {
        const familiares = [...familiar];
        familiares[e.target.id][e.target.dataset.name] = e.target.value;
        setFamiliar(familiares);
    };

    const handleSubmit = e => {
        e.preventDefault()
        console.log(familiar)
    }

    return (        
        <form onSubmit={handleSubmit}>            
        <label htmlFor="nombre">Nombre:</label>
        <input
        type="text"
        name="nombre"
        value={persona.nombre}
        onChange={handlePersonaChange}
        />  
        <input
            type="button"
            value="Buscar Actividad"
            onClick={agregaFamiliar}
        />
            
    </form>   
    );
};

export default BuscarAct;