'use client'
import axiosInstance from '@/axios-config';
import { useMySearchParams } from '@/contexts/searchParamContext';
import { getQueryParams } from '@/utils/front/others';
import { useState, useEffect } from 'react';

export function useJobsBySpecificSociety(societyId) {
    const { jobSearchParams } = useMySearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    const queryParams = getQueryParams(jobSearchParams);
    useEffect(() => {
        let query = '/job/by-society?societyId=' + societyId + (queryParams ? '&' + queryParams : '');
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

export function useJobs() {
    const { jobSearchParams } = useMySearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    const queryParams = getQueryParams(jobSearchParams);
    useEffect(() => {
        let query = '/job/all' + (queryParams ? '?' + queryParams : '');
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

export function useJobDetails(jobId) {
    const [data, setData] = useState([]);
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
