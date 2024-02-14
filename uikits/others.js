'use client'
import React, { useState } from 'react'
import { SvgSpinners90RingWithBg, SvgSpinnersBlocksShuffle3 } from './icon'

export function ViewTabs(props) {
    const { tabsList, defaultTab } = props;
    const [currentTab, setCurrentTab] = useState(defaultTab ? defaultTab : 0);

    return <div className="viewTabs" {...props}>
        <section className="vt-labels"  >
            {
                tabsList.map((item, i) => <article key={'view tab nb' + i}
                    className={currentTab == i && 'activeTab'}
                    onClick={() => setCurrentTab(i)}>
                    <span>{item.label}</span>
                </article>)
            }
        </section>
        <section className="vt-view" key={tabsList[currentTab].label}>
            {
                tabsList[currentTab].view
            }
        </section>
    </div>
}

export function SectionSpinner() {
    return (
        <div className='sectionSpinner'>
            <SvgSpinners90RingWithBg />
        </div>
    )
}

export function FullPageSpinner() {
    return <div className='fullPageSpinner'>
        <SvgSpinnersBlocksShuffle3 />
    </div>
}
