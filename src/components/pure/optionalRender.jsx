import React, {useState} from 'react'

let red = 0
let green = 200
let blue = 150

const loggedStyle = {
    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    color: "white",
    fontWeight: "bold"
}

const unloggedStyle = {
    backgroundColor: 'tomato',
    color: "white",
    fontWeight: "bold"
}

const LoginBtn = ({loginAction, propStyle}) =>{
    return(
        <button onClick={loginAction} style={propStyle}>Login</button>
    )
}

const LogoutBtn = ({logoutAction, propStyle}) =>{
    return(
        <button onClick={logoutAction} style={propStyle}>Logout</button>
    )
}



function OptionalRender() {

    const [access, setAccess] = useState(false)
    const [messages, setMessages] = useState(0)

    const updateAccess = () =>{
        setAccess(!access)
    }
    const loginAction = () => {
        setAccess(true)
    }
    const logoutAction = () => {
        setAccess(false)
    }


    let btn;

    if(access){
        btn = <LogoutBtn propStyle={unloggedStyle} logoutAction={updateAccess}></LogoutBtn>
    }else  btn = <LoginBtn propStyle={loggedStyle} loginAction={updateAccess}></LoginBtn>

    let addMessages = () => {
        setMessages(messages + 1)
    }

  return (
    <div>
        {btn}
        {access ? (
            <div>
                {messages > 0 ? <p>You have {messages} new message{messages > 1 ? 's': null}</p> : <p>Not messages</p>}

                <button onClick={addMessages}>{messages===0 ? 'Add first' : 'Add message'}</button>
            </div>
        ) : null }
    </div>
    
  )
}

export default OptionalRender