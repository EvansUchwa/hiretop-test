import React from 'react'
import PngLogo from '../../public/icon.png'
import Image from 'next/image';


function FinalisAccountWrapper({ children, title }) {
    return (
        <div className='finaliseAccount flex f-column'>
            <section className='fa-titleAndLogo flex f-column'>
                <Image src={PngLogo}
                    alt='mdr'
                    width={120}
                    height={120} />
                <h1>{title}</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam voluptates autem dolor culpa. Rem placeat quis quisquam fugit! Cumque,
                    accusamus enim. Pariatur earum, incidunt placeat totam eius debitis officiis.
                </p>
            </section>
            {children}
        </div>
    )
}

export default FinalisAccountWrapper
