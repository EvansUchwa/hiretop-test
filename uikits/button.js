import React from 'react'
import { SvgSpinnersBarsFade } from './icon';
import Link from 'next/link';

function SimpleButton(props) {
    const { text, defaultBg, defaultColor, disabled, isLink, ...rest } = props;
    function getBgStyle() {
        if (defaultBg && defaultColor) {
            return { backgroundColor: defaultBg, color: defaultColor, backgroundImage: 'initial' }
        }
    }
    if (isLink)
        return <Link href={isLink}>
            <button
                type='button'
                {...rest}
                disabled={disabled}
                style={{ ...getBgStyle() }}
            >
                {text}
            </button>
        </Link>
    return (
        <button
            type='button'
            {...rest}
            disabled={disabled}
            style={{ ...getBgStyle() }}
        >
            {text}
        </button>
    )
}


export function FormButton(props) {
    const { text, isValid, ...rest } = props;
    return (
        <div className='formBtn'>
            <button
                type='submit'
                {...rest}
                disabled={isValid ? false : true}
                className={isValid ? '' : 'btnDisabled'}
            >
                {text ? text : <SvgSpinnersBarsFade />}
            </button>
        </div>
    )
}

export default SimpleButton
