import React, {useEffect} from 'react'

export default function AllCycles() {

    useEffect(() => {
        
      console.log("Componente creado");

      const intervaloID = setInterval(()=> {
        document.title = `${new Date()}`
        console.log("actualización del componente");
      }, 1000)
    
      return () => {
        console.log("Componente a desaparecer");
        document.title = 'Tiempo detenido'
        clearIntervalo(intervaloID);
      }
    }, [])
    
  return (
    <div>
      
    </div>
  )
}
