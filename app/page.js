"use client";
import { useLang } from '@/contexts/langContext';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { lang, langData, changeLang } = useLang();

  return (
    <main className={''}>
      <div>
        <h1>Mdr</h1>
        <p>
          {langData.welcome}
        </p>
        <button onClick={() => changeLang(lang == 'fr' ? 'en' : 'fr')}>
          Change Lang
        </button>
      </div>
    </main>
  );
}
