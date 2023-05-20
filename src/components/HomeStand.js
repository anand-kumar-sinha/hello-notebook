import React from 'react'
import Typewriter from 'typewriter-effect';

function HomeStand(props) {

    return (
        <>
            <div class="container text-center my-3 text-center">
                <div class="row">
                    <div class={`col text-${props.mode === 'dark'?'light':'dark'} my-3 display-6 fw-bold`}>
                        <div >Welcome,In</div>
                        <span >
                            <Typewriter
                                options={{
                                    strings: ['Hello-NoteBook.', 'You Can upload Notes Privetly.', 'Acess any time.', 'Any where.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 50
                                }}
                            />
                        </span>
                    </div>
                    <div class="col">
                        <img src="/image/developer.png" alt="" width="75%" />
                    </div>
                </div>
            </div >


        </>
    )
}

export default HomeStand
