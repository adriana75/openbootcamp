import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

  componentDidMount(){
    console.log("Antes del render");
  }

  render() {    return (
        <div>
            <h1>DodMount</h1>
        </div>
    )     
  }
}

export const DidMountHook = () => {

    useEffect(() => {
        console.log("Antes del render con componentes funcionales");
    }, [])

    return (
        <div>
            <h1>DodMount</h1>
        </div>
    )
}

