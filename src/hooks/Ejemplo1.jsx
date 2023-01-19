import React, { useState } from 'react'

export default function Ejemplo1() {

    const valorInicial = 0;
    const valorInicialPersona = {
        nombre: "Adriana",
        email: "adriana@mail.com"
    }

    /* const [variable, funcionCambiar] = useState(ValorInicial) */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(valorInicialPersona)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: "Goofy",
                email: "goofy@mail.com"
            }
        )
    }

    return (
        <div>
            <h1>Ejemplo1: useState</h1>
            <h2>Contador: {contador}</h2>
            <h2>Datos de Persona: </h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            <button onClick={incrementar}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )
}
