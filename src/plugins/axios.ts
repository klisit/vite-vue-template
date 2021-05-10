'use strict'

import axios from 'axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.withCredentials = true
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

let config = {
  baseURL: process.env.VUE_APP_API_BASEURL || '',
  // timeout: 3 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
}

const http = axios.create(config)

http.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error)
  }
)

export default http
