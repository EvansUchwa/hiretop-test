import { headers } from "next/headers";


export function getIpAddress() {
    const headersList = headers();
    const ip = headersList.get("x-forwarded-for");
    return ip;
}

export function getJobFinalQuery(req) {
    const jobSector = req.nextUrl.searchParams.get('jobSector');
    const jobType = req.nextUrl.searchParams.get('jobType');
    const requiredDegree = req.nextUrl.searchParams.get('requiredDegree');
    const requiredExpYear = req.nextUrl.searchParams.get('requiredExpYear');
    const remoteAccepted = req.nextUrl.searchParams.get('remoteAccepted');
    const searchJobKeyword = req.nextUrl.searchParams.get('searchJobKeyword');


    let query = {};

    if (jobSector) {
        query.jobSector = jobSector;
    }
    if (jobType) {
        query.jobType = jobType;
    }
    if (requiredDegree) {
        query.requiredDegree = requiredDegree;
    }
    if (requiredExpYear) {
        query.requiredExpYear = requiredExpYear;
    }
    if (remoteAccepted) {
        query.remoteAccepted = remoteAccepted;
    }
    if (searchJobKeyword) {
        query.jobTitle = { '$regex': searchJobKeyword, "$options": "i" };
    }
    return query;
}

export const autorPopulate = { path: 'autor', model: '_user_' }