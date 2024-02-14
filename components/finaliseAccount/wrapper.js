import React from 'react'
import PngLogo from '../../public/icon.png'
import Image from 'next/image';
import { useLang } from '@/contexts/langContext';


function FinalisAccountWrapper({ children, title, role }) {
    const { appAdvantagesL } = useLang();
    return (
        <div className='finaliseAccount flex f-column'>
            <section className='fa-titleAndLogo flex f-column'>
                <Image src={PngLogo}
                    alt='mdr'
                    width={120}
                    height={120} />
                <h1>{title}</h1>
                {
                    role && <p>
                        {role == 'society' ? appAdvantagesL.forSociety[0] : appAdvantagesL.forTalent[0]}
                    </p>
                }
            </section>
            {children}
        </div>
    )
}

export default FinalisAccountWrapper
