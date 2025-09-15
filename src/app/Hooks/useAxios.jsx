import axios from "axios";

const axiosInstance = axios.create({
    // baseURL: `https://assignment-12-server-lac-one.vercel.app`
    baseURL: `http://localhost:3000`
    // baseURL: `https://next-js-course-management-app-proje.vercel.app`
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;