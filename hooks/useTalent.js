'use client'
import axiosInstance from '@/axios-config';
import { useMySearchParams } from '@/contexts/searchParamContext';
import { useState, useEffect } from 'react';

export function useTalents() {
    const { genderSearchParam, lastDegreeSearchParam, expYearsSearchParam, searchTalentKeywordSearchParam } = useMySearchParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refetch, setRefetch] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        let query = '/user/list?role=talent';

        if (searchTalentKeywordSearchParam) {
            query += '&searchTalentKeyword=' + searchTalentKeywordSearchParam;
        }
        if (genderSearchParam) {
            query += '&gender=' + genderSearchParam
        }
        if (lastDegreeSearchParam) {
            query += '&lastDegree=' + lastDegreeSearchParam;
        }
        if (expYearsSearchParam) {
            query += '&expYears=' + expYearsSearchParam;
        }


        axiosInstance.get(query)
            .then(res => setData(res.data))
            .catch(err => setError(true))
            .finally(() => setLoading(false))

    }, [refetch, genderSearchParam, lastDegreeSearchParam, expYearsSearchParam, searchTalentKeywordSearchParam]);


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


