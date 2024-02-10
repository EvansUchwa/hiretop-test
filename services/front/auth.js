import axiosInstance from "@/axios-config";

export async function registerUser(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/register', formData);
        successCb && successCb()
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}

export async function logUser(formData, successCb = null, errCb = null, finallyCb = null) {
    try {
        let req = await axiosInstance.post('/login', formData);
        successCb && successCb(req)
    } catch (error) {
        errCb && errCb(error)
    } finally {
        finallyCb && finallyCb()
    }
}