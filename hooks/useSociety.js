'use client'
import axiosInstance from '@/axios-config';
import { useState, useEffect } from 'react';

export function useSociety(societyId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/user/' + societyId + '?role=society';
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        society: data,
        societyLoading: loading,
        societyRefetch: makeRefetch
    }
}


