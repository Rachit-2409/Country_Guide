import axios from 'axios'

const API = axios.create({
    baseURL : 'https://restcountries.com/v3.1/'
})

const getData = ()=> API.get('all?fields=name,flags,region,currency,population,capital,languages');
export default getData

export const countrydata = (name)=> API.get(`name/${name}`);
