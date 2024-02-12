'use client'
import { useSearchParams } from "next/navigation";
import { useContext, createContext } from "react";
export const SearchParamContext = createContext();
export function SearchParamsProvider({ children }) {
    const searchParams = useSearchParams()
    const jobSector = searchParams.get('jobSector') ?? '';
    const jobType = searchParams.get('jobType') ?? '';
    const requiredDegree = searchParams.get('requiredDegree') ?? '';
    const requiredExpYear = searchParams.get('requiredExpYear') ?? '';
    const remoteAccepted = searchParams.get('remoteAccepted') ?? '';
    const jobSearchParams = { jobSector, jobType, requiredDegree, requiredExpYear, remoteAccepted };

    return <SearchParamContext.Provider
        value={{
            jobSearchParams
        }}>
        {children}
    </SearchParamContext.Provider>
}

export function useMySearchParams() {
    return useContext(SearchParamContext);
}