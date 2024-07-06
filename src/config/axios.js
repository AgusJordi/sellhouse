import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://zillow-com4.p.rapidapi.com/v2/properties',
  headers: {
    'x-rapidapi-key': '9972a91915mshba288e8d5db2f79p1ae8c4jsnf5195cd86670',
    'x-rapidapi-host': 'zillow-com4.p.rapidapi.com',
  },
});

export default axiosInstance;
