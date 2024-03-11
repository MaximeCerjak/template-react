import wretch from 'wretch';

const cerApi = wretch(import.meta.env.VITE_API_URL);

export { cerApi };
