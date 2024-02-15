'use client'
import axiosInstance from '@/axios-config';
import { useMySearchParams } from '@/contexts/searchParamContext';
import { getQueryParams } from '@/utils/front/others';
import { useState, useEffect } from 'react';

function getJobSearchParamsUrl(query, jobSectorSearchParam, jobTypeSearchParam,
    requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
    searchJobKeywordSearchParam) {
    if (jobSectorSearchParam) {
        query += '&jobSector=' + jobSectorSearchParam;
    }
    if (jobTypeSearchParam) {
        query += '&jobType=' + jobTypeSearchParam;
    }
    if (requiredDegreeSearchParam) {
        query += '&requiredDegree=' + requiredDegreeSearchParam;
    }
    if (requiredExpYearSearchParam) {
        query += '&requiredExpYear=' + requiredExpYearSearchParam;
    }
    if (remoteAcceptedSearchParam) {
        query += '&remoteAccepted=' + remoteAcceptedSearchParam;
    }
    if (searchJobKeywordSearchParam) {
        query += '&searchJobKeyword=' + searchJobKeywordSearchParam;
    }
    return query;
}


export function useJobsCreatedBySociety(societyId, limit = null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/job/all/by-society?societyId=' + societyId;
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        jobs: data,
        jobsLoading: loading,
        jobsRefetch: makeRefetch
    }
}

export function useJobsCreatedByConnectedSociety(limit = null) {
    const {
        jobSectorSearchParam, jobTypeSearchParam,
        requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
        searchJobKeywordSearchParam } = useMySearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        let query = getJobSearchParamsUrl('/job/all/by-connected-society?searchPossible=true', jobSectorSearchParam, jobTypeSearchParam,
            requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
            searchJobKeywordSearchParam);
        if (limit) {
            query += '&limit=' + limit;
        }
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))
    }, [refetch, jobSectorSearchParam, jobTypeSearchParam,
        requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
        searchJobKeywordSearchParam]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        jobs: data,
        jobsLoading: loading,
        jobsRefetch: makeRefetch
    }
}

export function useJobs() {
    const {
        jobSectorSearchParam, jobTypeSearchParam,
        requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
        searchJobKeywordSearchParam } = useMySearchParams();

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        let query = getJobSearchParamsUrl('/job/all?searchPossible=true', jobSectorSearchParam, jobTypeSearchParam,
            requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
            searchJobKeywordSearchParam);
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch, jobSectorSearchParam, jobTypeSearchParam,
        requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam, searchJobKeywordSearchParam]);

    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        jobs: data,
        jobsLoading: loading,
        jobsRefetch: makeRefetch
    }
}

export function useJobDetails(jobId) {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/job/' + jobId;
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        job: data,
        jobLoading: loading,
        jobRefetch: makeRefetch
    }
}

export function useAllJobWithApplys() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        let query = '/job/all/with-applys';
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        jobsWithApplys: data,
        jobsWithApplysJobLoading: loading,
        jobsWithApplysRefetch: makeRefetch
    }
}
