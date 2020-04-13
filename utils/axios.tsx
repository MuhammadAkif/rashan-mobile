import axios from 'axios';
import {store} from '../index';
import { SERVER_URL } from "../config";

const getJwt = () => {
    const { user }: any = store.getState().user_reducer;

    if (user && user.token) {
        return 'Bearer ' + user.token;
    }
    return '';
};



const getOptions = (isFile: any) => {

    let options:any = {
        withCredentials:true,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "getJwt()",
    
        }

    };

    if (isFile) {
        options.responseType = 'blob';
    }

    return options;

};

const prepareUrl = (api:string) => `${SERVER_URL}${api}`;

axios.interceptors.response.use((response:any) => {
    if (response && !response.status &&response.message == "AuthenticationFailure") {
        window.location.replace(`${SERVER_URL}/api/auth/openid`);
    }
    return response;
}, (error) => {
    if (error && !error.status &&  error.message == "AuthenticationFailure") {
        window.location.replace(`${SERVER_URL}/api/auth/openid`);
    }
    return Promise.reject(error.message);
});

const wrapper = {
    get: (api:string, isFile = false) => axios.get(prepareUrl(api), getOptions(isFile)),
    post: (api:string, formData = {}, isFile = false) => axios.post(prepareUrl(api), formData, getOptions(isFile)),
    put: (api:string, formData = {}) => axios.put(prepareUrl(api), formData, getOptions(null)),
    patch: (api:string, formData = {}, isFile = false) => axios.patch(prepareUrl(api), formData, getOptions(isFile)),
    delete: (api: string) => axios.delete(prepareUrl(api), getOptions(null)),
};

export default wrapper;