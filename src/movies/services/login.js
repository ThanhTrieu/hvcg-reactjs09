import axios from 'axios';

const loginUser = async (user, pass) => {
    const url = `https://reqres.in/api/login`;
    const params = new URLSearchParams();
    params.append('email', user);
    params.append('password', pass);
    const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const response = await axios.post(url, params, config);
    const result   = await response.status === 200 ? await response.data : {};
    return result;
}
export const apiUser = {
    loginUser
}