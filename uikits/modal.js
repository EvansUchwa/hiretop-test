'use client'
import React from 'react'
// import { CarbonClose, Sp } from './icons'
import { MaterialSymbolsCancelRounded, SvgSpinners90RingWithBg } from './icon';
import { useModal } from '@/contexts/modalContext';
import { useState } from 'react';

function Modal() {
    const { modalVisible, modalContent, showModal, hideModal } = useModal();

    if (!modalVisible)
        return null
    return (
        <div className={'modal ' + (modalVisible ? 'modalOpen' : '')}>
            <div className='modalBody'>
                <section className='mb-headCloser' onClick={() => hideModal()}>
                    <MaterialSymbolsCancelRounded />
                </section>

                <section className="mb-content">
                    {modalContent}
                </section>
            </div>
        </div>
    )
}


export function ConfirmationModal({ title, operationAfterValidation, subtitle = null }) {
    const [operationLoading, setOperationLoading] = useState(false);
    // const { hideModal } = useModal();
    return <div className='modalLayoutForOperationConfirmation'>
        <h1>{title} </h1>
        {
            subtitle && <div className='textCenter'>
                {subtitle}
            </div>
        }
        <section className='flex'>
            <button>Annuler</button>
            <button onClick={() => {
                setOperationLoading(true)
                operationAfterValidation(() => {
                    setOperationLoading(false);
                    // hideModal()
                })
            }}
                disabled={operationLoading ? true : false}
            >{operationLoading ? <SvgSpinners90RingWithBg /> : 'Oui'}</button>
        </section>
    </div>
}

export function QRORQDetailsOnModalContainer({ children }) {
    return <div className='detailsOnModal'>
        {children}
    </div>
}

export default Modal;