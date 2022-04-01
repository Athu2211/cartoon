import axios from 'axios';

const API = axios.create({ baseURL: 'https://api.sampleapis.com/cartoons' });

export const fetch2Dcartoons = () => API.get('/cartoons2D');
export const fetch3Dcartoons = () => API.get('/cartoons3D');
