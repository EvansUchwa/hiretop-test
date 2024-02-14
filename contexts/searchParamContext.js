'use client'
import { useQueryState } from "nuqs";
import { useContext, createContext } from "react";
export const SearchParamContext = createContext();
export function SearchParamsProvider({ children }) {
    const [jobSectorSearchParam, setJSSP] = useQueryState('jobSector');
    const [jobTypeSearchParam, setJTSP] = useQueryState('jobType');
    const [requiredDegreeSearchParam, setRDSP] = useQueryState('requiredDegree');
    const [requiredExpYearSearchParam, setREYSP] = useQueryState('requiredExpYear');
    const [remoteAcceptedSearchParam, setRASP] = useQueryState('remoteAccepted');


    const [searchTalentKeywordSearchParam, setSTKSP] = useQueryState('searchTalentKeyword');
    const [searchJobKeywordSearchParam, setSJKSP] = useQueryState('searchJobKeyword');

    const [lastDegreeSearchParam, setLDSP] = useQueryState('lastDegree');
    const [expYearsSearchParam, setEYSP] = useQueryState('expYears');
    const [genderSearchParam, setGSP] = useQueryState('gender');

    return <SearchParamContext.Provider
        value={{
            jobSectorSearchParam, jobTypeSearchParam, requiredDegreeSearchParam, requiredExpYearSearchParam, remoteAcceptedSearchParam,
            genderSearchParam, lastDegreeSearchParam, expYearsSearchParam,

            searchJobKeywordSearchParam, searchTalentKeywordSearchParam,
            setSJKSP, setJSSP,

            setJTSP, setRDSP, setREYSP, setRASP,
            setSTKSP, setLDSP, setEYSP,
            setGSP
        }}>
        {children}
    </SearchParamContext.Provider>
}

export function useMySearchParams() {
    return useContext(SearchParamContext);
}