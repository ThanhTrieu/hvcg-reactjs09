import axios from 'axios';
import jwt from 'jsonwebtoken';
import { LOGIN_KEY } from '../helpers/constant';

// fake api - dong vai tro nhu la 1 ben phia BE
const loginUserFake = (user, pass) => {
    let token = null;
    if(user === 'admin' && pass === '123'){
        // ma hoa thong tin tra ve
        token = jwt.sign({
            id: 1,
            user: user,
            email: 'admin@example.com',
            phone: '0975091304',
            address: 'Ha Noi'
        }, LOGIN_KEY);
    }
    return token;
}

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
    loginUser,
    loginUserFake
}