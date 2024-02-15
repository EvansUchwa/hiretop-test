"use client";
import { useLang } from '@/contexts/langContext';
import { withoutAuth } from '@/hocs/withoutAuth';
import SimpleButton from '@/uikits/button';
import { useRouter } from 'next/navigation';

function Home() {
  const router = useRouter();
  const { lang, langData, changeLang } = useLang();

  return (
    <div className={'home'}>
      <div className='homeBanner'>
        <section className='hb-text'>
          <h1>
            We are
          </h1>
          <b>HIRE TOP</b>
          <h2>
            We connect people and job opportunities
          </h2>
        </section>
        <section className='hb-actions'>
          <SimpleButton text='Browse Jobs' isLink="/job/all" />
          <SimpleButton text='Browse Talents' defaultBg="transparent" defaultColor="black" isLink="/talent/all" />
        </section>
      </div>
    </div>
  );
}


export default withoutAuth(Home);