"use client";
import { useLang } from '@/contexts/langContext';
import { withoutAuth } from '@/hocs/withoutAuth';
import SimpleButton from '@/uikits/button';

function Home() {
  const { homeL, buttonsL } = useLang();
  return (
    <div className={'home'}>
      <div className='homeBanner'>
        <section className='hb-text'>
          <h1>
            {homeL.weAreStartText}
          </h1>
          <b>HIRE TOP</b>
          <h2>
            {homeL.weAreEndText}
          </h2>
        </section>
        <section className='hb-actions'>
          <SimpleButton text={buttonsL.browseJobs} isLink="/job/all" />
          <SimpleButton text={buttonsL.browseTalents} defaultBg="transparent" defaultColor="black" isLink="/talent/all" />
        </section>
      </div>
    </div>
  );
}


export default withoutAuth(Home);