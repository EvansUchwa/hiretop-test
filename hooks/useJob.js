'use client'
import axiosInstance from '@/axios-config';
import { useState, useEffect } from 'react';

export function useJobsBySpecificSociety(societyId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/job/by-society?societyId=' + societyId;
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
        let query = '/job/details?jobId=' + jobId;
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
