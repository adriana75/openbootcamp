import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import React from 'react'
import { Contacto } from './contacto.class';

const ContactoF = ({contacto}) => {
    let conectadoInit = contacto.conectado
    const [conectado, setConectado] = useState(conectadoInit);
    function changeState() {
        setConectado(!conectado)
    }
  
    return (
        <div>
            <h2>Nombre: {contacto.nombre}</h2>
            <h2>Apellido: {contacto.apellido}</h2>
            <h2>Email: {contacto.email}</h2>
            <h2>Estado: {conectado ? "Contacto En Línea" : "Contacto No Disponible"}</h2>  
            <div>
                <button onClick={changeState}>Cambiar Estado</button>
            </div>  
        </div>
    )
}

ContactoF.propTypes = {
    cont: PropTypes.instanceOf(Contacto)
}

export default ContactoF

 




