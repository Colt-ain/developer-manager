import Component from '@ember/component';
import CONST from '../../constants';

export default Component.extend({
	label: null,
	roleItems: CONST.roles,
	frameworksItems: CONST.frameworks,
	role: null,
	frameworks: null,
	actions: {
		setFilters() {
			console.log('set filters');
		}
	}
});
