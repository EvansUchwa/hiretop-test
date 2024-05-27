"use client";
import axiosInstance from "@/axios-config";
import { useMySearchParams } from "@/contexts/searchParamContext";
import { getQueryParams } from "@/utils/front/others";
import { useState, useEffect } from "react";

function getJobSearchParamsUrl(
  query,
  jobSectorSearchParam,
  jobTypeSearchParam,
  requiredDegreeSearchParam,
  requiredExpYearSearchParam,
  remoteAcceptedSearchParam,
  searchJobKeywordSearchParam,
  salarySearchParam,
  locationSearchParam
) {
  if (jobSectorSearchParam) {
    query += "&jobSector=" + jobSectorSearchParam;
  }
  if (jobTypeSearchParam) {
    query += "&jobType=" + jobTypeSearchParam;
  }
  if (requiredDegreeSearchParam) {
    query += "&requiredDegree=" + requiredDegreeSearchParam;
  }
  if (requiredExpYearSearchParam) {
    query += "&requiredExpYear=" + requiredExpYearSearchParam;
  }
  if (remoteAcceptedSearchParam) {
    query += "&remoteAccepted=" + remoteAcceptedSearchParam;
  }
  if (searchJobKeywordSearchParam) {
    query += "&searchJobKeyword=" + searchJobKeywordSearchParam;
  }
  if (salarySearchParam) {
    query += "&salary=" + salarySearchParam;
  }
  if (locationSearchParam) {
    query += "&location=" + locationSearchParam;
  }
  return query;
}

export function useJobsCreatedBySociety(societyId, limit = null) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let query = "/job/all/by-society?societyId=" + societyId;
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    jobs: data,
    jobsLoading: loading,
    jobsRefetch: makeRefetch,
  };
}

export function useJobs(byConnectedSociety = false, limit = null) {
  // '/job/all/by-connected-society?searchPossible=true'
  let baseUrl = byConnectedSociety
    ? "/job/all/by-connected-society"
    : "/job/all";
  baseUrl += "?searchPossible=true";
  if (limit) {
    baseUrl += "&limit=" + limit;
  }

  const {
    jobSectorSearchParam,
    jobTypeSearchParam,
    requiredDegreeSearchParam,
    requiredExpYearSearchParam,
    remoteAcceptedSearchParam,
    searchJobKeywordSearchParam,
    salarySearchParam,
    locationSearchParam,
  } = useMySearchParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    let query = getJobSearchParamsUrl(
      baseUrl,
      jobSectorSearchParam,
      jobTypeSearchParam,
      requiredDegreeSearchParam,
      requiredExpYearSearchParam,
      remoteAcceptedSearchParam,
      searchJobKeywordSearchParam,
      salarySearchParam,
      locationSearchParam
    );
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [
    refetch,
    jobSectorSearchParam,
    jobTypeSearchParam,
    requiredDegreeSearchParam,
    requiredExpYearSearchParam,
    remoteAcceptedSearchParam,
    searchJobKeywordSearchParam,
    salarySearchParam,
    locationSearchParam,
  ]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    jobs: data,
    jobsLoading: loading,
    jobsRefetch: makeRefetch,
  };
}

export function useJobDetails(jobId) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let query = "/job/" + jobId;
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    job: data,
    jobLoading: loading,
    jobRefetch: makeRefetch,
  };
}

export function useAllJobWithApplys() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    let query = "/job/all/with-applys";
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    jobsWithApplys: data,
    jobsWithApplysJobLoading: loading,
    jobsWithApplysRefetch: makeRefetch,
  };
}

export function useAllJobCountByCatgorie() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    let query = "/job/count-by-categorie";
    axiosInstance
      .get(query)
      .then((res) => setData(res.data))
      .catch((err) => setError(true))
      .finally(() => setLoading(false));
  }, [refetch]);

  function makeRefetch() {
    setRefetch((prev) => !prev);
  }
  return {
    jobCountByCatgorie: data,
    jobCountByCatgorieLoading: loading,
    jobCountByCatgorieRefetch: makeRefetch,
  };
}

// count-by-categorie
