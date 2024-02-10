import axiosInstance from "@/axios-config";

export async function createJob(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.post('/job/create', formData);
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function updateJob(jobId, formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/job/update?jobId=' + jobId, formData);
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

// 