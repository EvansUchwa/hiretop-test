import axiosInstance from "@/axios-config";
import { createFormDataFromObject } from "@/utils/front/others";

export async function applyToJob(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/apply/new', formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function acceptOrRejectApply(applyId, formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.put('/apply/update?applyId=' + applyId, formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}