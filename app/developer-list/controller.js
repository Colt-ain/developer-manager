import Controller from '@ember/controller';
import CONST from '../constants';

const { roles, frameworks } = CONST;

export default Controller.extend({
	roles,
	frameworks,
	selectedRole: null,
	selectedFrameworks: [],
	developers: Ember.computed('model.developers.@each', 'selectedRole', 'selectedFrameworks.@each', function() {
		const selectedRoles = this.get('selectedRole');
		const selectedFrameworks = this.get('selectedFrameworks');
		const developers = this.get('model.developers');

		if (!developers) return [];

		if ((!selectedRoles || !selectedRoles.length) && !selectedFrameworks.length) {
			return developers;
		}

		if (!selectedRoles || !selectedRoles.length) {
			return developers.filter(dev => {
				return dev.frameworks.some(frame => selectedFrameworks.includes(frame));
			});
		}

		if (!selectedFrameworks.length) {
			return developers.filter(dev => selectedRoles.includes(dev.role));
		}

		return developers.filter(dev => {
			return dev.roles === selectedRoles && dev.frameworks.includes(selectedFrameworks);
		});
	})
});
