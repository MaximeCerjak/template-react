var apiSessionTime = 60 * 60 * 12 * 1000; // 12 heures en ms
/**
 * Vérifie si la session est toujours active
 * @returns bool
 */
function isTimeOut() {
	let now = Date.now();
	let sessionTime = localStorage.getItem('time');
	return parseInt(sessionTime) + apiSessionTime < now;
}

/**
 * Récupère le temps de session restant en ms
 * @returns int temps en ms
 */
function forceReconnectionWhenTokenInvalid() {
	let now = Date.now();
	let sessionTime = parseInt(localStorage.getItem('time'));
	let token = localStorage.getItem('token');
	let sessionValidUntil = sessionTime + apiSessionTime;
	let remainingTime = sessionValidUntil - now;
	if (
		!isNaN(remainingTime) &&
		sessionTime != undefined &&
		sessionTime != null &&
		sessionTime > 0 &&
		token != undefined &&
		token != null &&
		token != ''
	) {
		if (remainingTime > 60000) {
			return false;
		}
	}
	return true;
}

/**
 * Retourne true si la variable n'est pas définie, si elle est égale à null ou si elle est vide
 * @param {*} value
 * @returns bool
 */
const isEmpty = (value) => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	);
};

/**
 * Formate un objet date en string au format JJ-MM-YY
 * @param {Date} date
 * @returns string
 */
const convertDateToLocaleStringFr = (date) => {
	if (date instanceof Date && isFinite(date)) {
		return date.toLocaleDateString('fr', {
			year: '2-digit',
			month: '2-digit',
			day: '2-digit',
		});
	} else {
		return '';
	}
};

const classNames = (...classes) => {
	return classes.filter(Boolean).join(' ');
};

export {
	isTimeOut,
	forceReconnectionWhenTokenInvalid,
	isEmpty,
	convertDateToLocaleStringFr,
	classNames,
};
