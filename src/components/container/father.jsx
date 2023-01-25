import React, {useState} from 'react'
import Child from '../pure/forms/child'

export default function Father() {

    const [name, setName] = useState('Adriana')

    function showMessage(text){
        alert(`Mesagge ${text}`)
    }

    function updateName(newName){
        setName(newName)
    } 
  return (
    <div style={{background: 'tomato', padding: '10px'}}>
      <Child name={name} send={showMessage} update={updateName}></Child>
    </div>
  )
}
