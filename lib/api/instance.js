import axios from 'axios';

import { DOMAIN_API as baseURL, NAME_TOKEN, DOMAIN } from '../configs/constant';
import Cookies from 'js-cookie'; 

const accessToken = Cookies.get(NAME_TOKEN, { domain: DOMAIN });

let config = {
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
};

if (accessToken) {
  config.headers = { ...config.headers, Authorization: `Bearer ${accessToken}` };
}

export default axios.create(config);
