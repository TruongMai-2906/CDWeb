import axios from 'axios';

const get = (url: string) => {
  return axios.get(url);
}

const post = (url: string, data: any) => {
  return axios.post(url, data);
}

const put = (url: string, data: any) => {
  return axios.put(url, data);
}

const patch = (url: string, data: any) => {
  return axios.patch(url, data);
}

const del = (url: string) => {
  return axios.delete(url);
}

export {get, post, put, patch, del}