import React, {useRef} from 'react'

export default function Child({name, send, update}) {

    const messageRef = useRef('')
    const nameRef = useRef('')

    function pressButton(){
        const text = messageRef.current.value;
        alert(`Default Text ${text}`)
    }

    function pressButtonParams(text){
        alert(`text: ${text}`)
    }

    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value);
    }
  return (
    <div style={{background: 'cyan', padding: '30px'}}>
      <p onMouseOver={()=>console.log('On Mouse Over')}>Hello, {name}</p>
      <button onClick={()=> console.log('Botón1')}>Botón 1</button>
      <button onClick={pressButton}>Botón 2</button>
      <button onClick={() => pressButtonParams('Hello')}>Botón 3</button>
      <input placeholder='Send text to father' 
      onFocus={()=>console.log('Input focus')}
      onChange={(e)=>console.log('Input change', e.target.value)}
      onCopy={()=>console.log("copy")} 
      ref = {messageRef}
      ></input>
      <button onClick={()=>send(messageRef.current.value)}>Send Message</button>
      <div style={{marginTop: '20x'}}>
        <form onSubmit={submitName}>
            <input placeholder='New Name' ref={nameRef}></input>
            <button type='submit'>Update Name</button>
        </form>
      </div>
    </div>
  )
}
