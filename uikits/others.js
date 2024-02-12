import Image from 'next/image'
import React from 'react'
import SpinnerSvg from "../public/spinner.svg"
import { SvgSpinners90RingWithBg, SvgSpinnersBlocksShuffle3 } from './icon'

function PageSpiner() {
    return (
        <div>

        </div>
    )
}

export function SectionSpinner() {
    return (
        <div className='sectionSpinner'>
            {/* <Image
                src={SpinnerSvg}
                alt="hiretop section spinner"
                width={50}
                height={50}
            /> */}
            <SvgSpinners90RingWithBg />
        </div>
    )
}

export function FullPageSpinner() {
    return <div className='fullPageSpinner'>
        <SvgSpinnersBlocksShuffle3 />
    </div>
}

export default PageSpiner
