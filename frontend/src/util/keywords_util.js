import axios from 'axios';

export const fetchKeywords = () => (
    axios.get('/api/keywords')
);

export const saveKeywords = (keywords) => (
    axios.post('/api/keywords', keywords)
);