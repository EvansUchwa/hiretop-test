import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api', // Remplacez par votre URL de base
    timeout: 5000, // Définissez le timeout souhaité
});

export default axiosInstance;