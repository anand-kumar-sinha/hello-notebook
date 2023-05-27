import React from 'react'
import Notes from './Notes'
import HomeStand from './HomeStand'

function Home(props) {
  const {showAlert} = props
  return (
    <div >
      <HomeStand mode = {props.mode} showAlert={showAlert}/>
      <Notes mode = {props.mode} showAlert={showAlert}/>
    </div>
  )
}

export default Home
