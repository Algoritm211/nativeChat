// import axios from 'axios'
import {AsyncStorage} from "react-native";

const axios = require('axios')
import setCookie from 'set-cookie-parser';

const instanceAxios = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '91cc5a84-d625-478b-a406-09acdffa3140'
  }
})

let cookies, cookieHeader
export const loginAPI = {
  async login() {
    const data = await instanceAxios.post('auth/login', {email: 'algoritm211@gmail.com', password: 'aeg0806aeg'})
      .then(response => {
        // console.log(response.headers)
        cookieHeader = setCookie.splitCookiesString(response.headers['set-cookie']);
        cookies = setCookie.parse(cookieHeader);
        AsyncStorage.setItem('userCookie', cookies);
        return response.data
      })
    instanceAxios.interceptors.request.use(async config => {
      let cookie = await AsyncStorage.getItem('userCookie');
      if (cookie) {
        config.headers.Cookie = cookie;
      }
      return config;
    });
    const successAuthMe = await instanceAxios.get('/auth/me', {withCredentials: true})
  },


}


