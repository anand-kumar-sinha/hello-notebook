import React from 'react'
import Typewriter from 'typewriter-effect';

function HomeStand(props) {

    return (
        <>
            <div className="container text-center my-3 text-center">
                <div className="row">
                    <div className={`col text-${props.mode === 'dark'?'light':'dark'} my-3 display-6 fw-bold`}>
                        <div >WELCOME, IN</div>
                        <span >
                            <Typewriter
                                options={{
                                    strings: ['Hello-NoteBook.', 'You Can Upload Your Notes Privetly.', 'Acess Any Time.', 'Any Where.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            />
                        </span>
                    </div>
                    <div className="col">
                        <img src="/image/developer.png" alt="" width="75%" />
                    </div>
                </div>
            </div >


        </>
    )
}

export default HomeStand
