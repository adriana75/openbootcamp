import React, { useState, useRef, useEffect } from 'react'

export default function Ejemplo2() {

    const [contador1, setContador1] =  useState(0);
    const [contador2, setContador2] = useState(0);
    
    const miRef = useRef();

    const incrementar1 = () => {
        setContador1(contador1+1)
    }

    const incrementar2 = () => {
        setContador2(contador2+1)
    }

    /*useEffect(() => {
      console.log("Cambio en el estado del componente");
      console.log("Mostrando referencias al elemento DOM");
      console.log(miRef);
    })*/

    /*useEffect(() => {
        console.log("Cambio en el estado del contador 1");
        console.log("Mostrando referencias al elemento DOM");
        console.log(miRef);
    }, [contador1])*/

    useEffect(() => {
        console.log("Cambio en el estado del contador 1 o contador 2");
        console.log("Mostrando referencias al elemento DOM");
        console.log(miRef);
    }, [contador1, contador2])

    return (
    <div>
        <h1>Ejemplo2: useState, useRef, useEffect</h1>
        <h2>Contador 1: {contador1}</h2>
        <h2>Contador 2: {contador2}</h2>
        <h4 ref={miRef}>Referencia</h4>
        <div>
            <button onClick={incrementar1}>Incrementar contador 1</button>
            <button onClick={incrementar2}>Incrementar contador 2</button>
        </div>
    </div>
    )
}
