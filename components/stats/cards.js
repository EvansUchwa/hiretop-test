import React from 'react'

export function SmallStatCard({ title, count }) {
    return (
        <article className='smallStatCard'>
            <span>{count} </span>
            <b>{title}</b>
        </article>
    )
}
