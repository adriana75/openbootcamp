
import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentDidMount(){
        console.log("Comportamiento del componente antes que se desaparezca");
    }

    render() {
        return(
            <div>
                <h1>WillUnMount</h1>
            </div>
        )
    }
}

export const WillUnMountHook = () => {
    useEffect(()=>{
        return()=> {
            console.log("Comportamiento del componente antes que se desaparezca");
        }
    }, [])

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    )
}
