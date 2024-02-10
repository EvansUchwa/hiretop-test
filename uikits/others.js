import Image from 'next/image'
import React from 'react'
import SpinnerSvg from "../public/spinner.svg"

function PageSpiner() {
    return (
        <div>

        </div>
    )
}

export function SectionSpinner() {
    return (
        <div className='sectionSpinner'>
            <Image
                src={SpinnerSvg}
                alt="hiretop section spinner"
                width={50}
                height={50}
            />
        </div>
    )
}

export default PageSpiner
