import { cerApi } from '../../api';

export const getConnexion = () => {
	const response = cerApi.url('connect/casfull').get().json();
	return response;
};
