'use client'
import axiosInstance from '@/axios-config';
import { useState, useEffect } from 'react';


export function useAllApplyForAJob(jobId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/apply/all/for-job?jobId=' + jobId;
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        applysForJob: data,
        applysForJobLoading: loading,
        applysForJobRefetch: makeRefetch
    }
}



export function useTalentAllApply(limit = null) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/apply/all/for-user';
        if (limit) {
            query += '?limit=' + limit;
        }
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        applys: data,
        applysLoading: loading,
        talentRefetch: makeRefetch
    }
}

