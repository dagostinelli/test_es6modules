import createBrowserHistory from 'history';

class Navigation {
	constructor() {
		this.history = createBrowserHistory();
	}

	getHistory() {
		return this.history;
	}
}

var instance = new Navigation();

export default instance;
