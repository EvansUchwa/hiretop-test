import axiosInstance from "@/axios-config";
import { createFormDataFromObject } from "@/utils/front/others";


export async function validateUserEmail(token, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/mail-validation', { token });
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}


export async function finaliseSocietyUser(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/finalise-account/society', createFormDataFromObject(formData));
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}


export async function updateSocietyOrTalentGeneralData(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/update-account/general', formData);
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function updateSocietyOrTalentFilesData(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/update-account/files', createFormDataFromObject(formData));
        successCb && successCb(res)
    } catch (error) {
        console.log(error);
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function finaliseTalentUserAccount(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.put('/finalise-account/talent', createFormDataFromObject(formData));
        successCb && successCb(req)
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}