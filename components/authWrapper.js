import React from 'react'

function AuthWrapper({ children, title }) {
    return (
        <div className='authWrapper'>
            <section>
                {/* <h1>{title}</h1> */}
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, iure,
                    facilis nemo consectetur officia quod quaerat, accusamus perferendis magnam quibusdam hic! Dolor,
                    natus autem? Exercitationem id quibusdam autem hic! Laboriosam.
                </p>
            </section>
            <section>
                {children}
            </section>
        </div>
    )
}

export default AuthWrapper
