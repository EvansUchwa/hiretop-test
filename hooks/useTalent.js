'use client'
import axiosInstance from '@/axios-config';
import { useState, useEffect } from 'react';

export function useTalents() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/user/list?role=talent';
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        talents: data,
        talentsLoading: loading,
        talentsRefetch: makeRefetch
    }
}

export function useTalentDetails(talentId) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        let query = '/user/' + talentId + '?role=talent';
        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch]);


    function makeRefetch() {
        setRefetch(prev => !prev)
    }
    return {
        talent: data,
        talentLoading: loading,
        talentRefetch: makeRefetch
    }
}


