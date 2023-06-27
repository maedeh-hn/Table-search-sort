import axios from "axios";



const instance = axios.create({
  baseURL: "https://myfakeapi.com/api",

});

instance.interceptors.request.use(

);

instance.interceptors.response.use(
  (res:any) => {
    return res;
  },
  async (err:any) => {

    return Promise.reject(err);
  }
);


export default instance
