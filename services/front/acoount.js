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


export async function updateSocietyUserAccount(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let res = await axiosInstance.put('/update-account/society', createFormDataFromObject(formData));
        console.log('bro');
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

export async function finaliseTalentUserGeneralData(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/finalise-account/talent/general', formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function finaliseTalentUserExpAndFormationsData(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/finalise-account/talent/experience-and-formation', formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function finaliseTalentDocData(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/finalise-account/talent/files', formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}