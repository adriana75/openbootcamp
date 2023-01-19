import React, { Component, useEffect } from 'react'

export default class DidUpdate extends Component {

  componentDidUpdate () {
    console.log("Para actualizarse");
  }

  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}

export const DidUpdateHook = () => {

    useEffect( () => {
        console.log("Para actualizarse");
    })

    return(
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
}
