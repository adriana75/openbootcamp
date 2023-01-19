import React, {useState} from "react";
import ContactoF from "./contactoF";
import { Contacto } from "./contacto.class";


const ContactoComponent = () => {


    const defaultContac = new Contacto("Adriana", "Paredes Salinas", "adriana@mail.com", true)
  
    return (
      <div>
        <div>
          Datos Usuario: 
        </div>
        <ContactoF contacto = {defaultContac}></ContactoF>
      </div>
    )
}

export default ContactoComponent



