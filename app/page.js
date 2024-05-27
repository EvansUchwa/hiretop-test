"use client";
import { useLang } from "@/contexts/langContext";
import { withoutAuth } from "@/hocs/withoutAuth";
import { useAllJobCountByCatgorie } from "@/hooks/useJob";
import { useGlobalStats } from "@/hooks/useStats";
import SimpleButton from "@/uikits/button";
import {
  MaterialSymbolsArrowCircleRight,
  MaterialSymbolsHomeWorkOutline,
  MaterialSymbolsPersonBook,
  MaterialSymbolsWork,
  MaterialSymbolsWorkUpdate,
} from "@/uikits/icon";
import Link from "next/link";

function Home() {
  const { homeL, buttonsL } = useLang();
  return (
    <div className={"home"}>
      <div className="homeBanner">
        <section className="hb-text">
          {/* <h1>{homeL.weAreStartText}</h1> */}
          <b>HIRE TOP</b>
          <h2>{homeL.weAreEndText}</h2>
        </section>
        <section className="hb-actions">
          <SimpleButton text={buttonsL.browseJobs} isLink="/job/all" />
          <SimpleButton
            text={buttonsL.browseTalents}
            defaultBg="transparent"
            defaultColor="black"
            isLink="/talent/all"
          />
        </section>
      </div>

      <HomeCatgoriesJobsCount />
      <HomeGlobalStats />
    </div>
  );
}

function HomeGlobalStats() {
  const { stats, statsLoading } = useGlobalStats();
  const { homeL } = useLang();
  // {"jobCount":5,"societyCount":2,"talentCount":2,"jobApplyCount":0}
  if (statsLoading) return "";

  return (
    <div className="homeAppStats flex f-wrap">
      <article className="flex">
        <MaterialSymbolsWork />
        <p>
          <b>{stats.jobs}</b>
          <span>{homeL.stats.perEntity.jobCount}</span>
        </p>
      </article>
      <article className="flex">
        <MaterialSymbolsPersonBook />
        <p>
          <b>{stats.societys}</b>
          <span>{homeL.stats.perEntity.societyCount}</span>
        </p>
      </article>
      <article className="flex">
        <MaterialSymbolsHomeWorkOutline />
        <p>
          <b>{stats.talents}</b>
          <span>{homeL.stats.perEntity.talentCount}</span>
        </p>
      </article>
      <article className="flex">
        <MaterialSymbolsWorkUpdate />
        <p>
          <b>{stats.jobApplys}</b>
          <span>{homeL.stats.perEntity.jobApplyCount}</span>
        </p>
      </article>
    </div>
  );
}

function HomeCatgoriesJobsCount() {
  const { formsL, homeL } = useLang();
  const { jobCountByCatgorie, jobCountByCatgorieLoading } =
    useAllJobCountByCatgorie();

  if (jobCountByCatgorieLoading) return "...";
  return (
    <div className="homeAllJobsCountByCategorie">
      <h2>{homeL.stats.perCategory.title}</h2>
      <section className="flex f-wrap">
        {jobCountByCatgorie.map((item, i) => (
          <Link
            href={"/job/all?jobSector=" + item._id}
            className="flex"
            key={"jbc nb" + i}
          >
            <p>
              <b>{formsL.fields.workSectorOptions[item._id]}</b>
              <br />
              <span>({item.count} Jobs)</span>
            </p>
            <MaterialSymbolsArrowCircleRight />
          </Link>
        ))}
      </section>
    </div>
  );
}

export default withoutAuth(Home);
