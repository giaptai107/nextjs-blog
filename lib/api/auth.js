import { NAME_TOKEN } from '../configs/constant';
import Cookies from 'js-cookie';
import axios from 'axios';


export default {
  signIn: (data) =>
    instance.post('signin', data).then((res) => {
      const token = res?.data?.data?.token;
      Cookies.set(NAME_TOKEN, token);
      return res;
    })
};