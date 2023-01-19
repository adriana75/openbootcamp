import React, { useState, useContext } from 'react'

const miContexto = React.createContext(null)

function Componente1() {

    const state = useContext(miContexto)

    return (
    <div>
        <h1>El Token es: {state.token}</h1>
        <Componente2></Componente2>
    </div>
    )
}

function Componente2() {

    const state = useContext(miContexto)

    return (
    <div>
        <h2>La sesión es: {state.sesion}</h2>
    </div>
    )
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: "12345",
        sesion: 1
    }

    const [sessionData, setSessionData] = useState(estadoInicial)

   const actualizarSesion = () => {
    setSessionData(
        {
            token: "adri123",
            sesion: sessionData.sesion + 1
        }
    )
   }

    return (
        <miContexto.Provider value={sessionData}>
        <h1>Ejemplo de useState y useContext</h1>
            <Componente1></Componente1>
            <button onClick={actualizarSesion}>Actualizar sesión</button>
        </miContexto.Provider>
    )
}


