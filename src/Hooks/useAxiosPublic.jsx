import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://newspaper-final-server.vercel.app",
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
