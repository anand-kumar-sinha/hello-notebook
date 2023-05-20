import React from 'react'
import Notes from './Notes'
import HomeStand from './HomeStand'

function Home(props) {

  return (
    <div >
      <HomeStand mode = {props.mode}/>
      <Notes mode = {props.mode}/>
    </div>
  )
}

export default Home
