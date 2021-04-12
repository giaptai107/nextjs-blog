export const DOMAIN =
  process.env.NEXT_PUBLIC_API_BASE ||
  process.env.API_BASE ||
  'https://virtualinterships.vietprojectgroup.com';

// export const DOMAIN = "http://localhost:8000/api/v1/";
// export const DOMAIN = 'http://vi.bp/';

export const DOMAIN_API = DOMAIN + '/api/v1/';

export const NAME_TOKEN = 'accessToken';

export const NAME_TOKEN_FCM = 'fcmToken';

export const SIGN_UP_HC_NAME = 'signUpHC';

export const OATH_GOOGLE_KEY =
  '1006393022584-t637gd0edmq7fd0dlkafmm2mpto7enlk.apps.googleusercontent.com';

export const EMAIL_EXISTS = 'emailExists';

export const EMAIL_FORGOT = 'emailForgot';

export const AUTHEN_URL = ['/', '/notifications', '/profile', '/payment-demo', '/applications'];

export const NO_AUTHEN_URL = ['/sign-in', '/forgot-password', '/sign-up'];

export const ICON_URL = [
  'facebook',
  'instagram',
  'twitter',
  'youtube',
  'linkedin',
  'snapchat',
  'pinterest',
  'reddit'
];

export const IMAGE_VALID = ['jpg', 'jpeg', 'png', 'svg', 'gif'];

export const COUNTRY_API_KEY = 'MldJQnBiOGNaQllhZ0ljTWdKUWl0dFZha0xZRVdFNXh2M3o4d0pqdg==';

export const COUNTRY_API_URL = 'https://api.countrystatecity.in/v1/';

export const SIGN_CURRENCY = {
  AUD: {
    name: 'AUD',
    sign: 'A$'
  },
  USD: {
    name: 'USD',
    sign: '$'
  },
  GBP: {
    name: 'GBP',
    sign: '£'
  }
};

export const USER_TYPE = {
  STUDENT: '1',
  EMPLOYEE: '2'
};

export const USER_ACTION = {
  DOMAIN_EXIST: 'DOMAIN_EXIST',
  EMAIL_EXIST: 'EMAIL_EXIST',
  NEED_VERIFY: 'NEED_VERIFY',
  INFORMATION_COMPLETE: 'INFORMATION_COMPLETE',
  APPLICATION: 'APPLICATION'
};

export const ACTION_APPLICATION = 'APPLICATION';

export const MAX_FILE_SIZE = 5120; // 5 MB
