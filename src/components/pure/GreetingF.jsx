import React, { useState } from 'react'
import PropTypes from 'prop-types'

function GreetingF(props) {

    const [age, setAge] = useState(35);

    const birthday = () => {
        setAge(age + 1)
    }

    return (
    <div>
        <h1>Hola {props.name} componente funcional</h1>
        <h2>Edad: {age}</h2>
        {/*<div>
            <button onClick={this.birthday}>Cumplir Años</button>
        </div>*/}
        <div>
            <button onClick={birthday}>Cumplir Años</button>
        </div>
    </div>
    )
}

GreetingF.propTypes = {
    name: PropTypes.string
}

export default GreetingF

