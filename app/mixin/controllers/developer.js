import Ember from 'ember';
import CONST from '../../constants';

const { frameworks, roles } = CONST;

export default Ember.Mixin.create({
	frameworks,
	roles,
	actions: {
		selectFrame(framework) {
			const frameworks = [ ...this.get('model.frameworks'), framework];

			this.set('model.frameworks', frameworks)
		},
		selectRole(role) {
			this.set('model.role', role);
		},
	}
});
