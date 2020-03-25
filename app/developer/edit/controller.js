import Controller from '@ember/controller';
import CONST from '../../constants';

const { frameworks, roles } = CONST;

export default Controller.extend({
	frameworks,
	roles,
	actions: {
		selectFrame(framework) {
			const frameworks = [ ...this.get('model.frameworks'), framework];

			this.set('model.frameworks', frameworks)
		},
		selectRole(role) {
			this.set('model.role', role);
		}
	}
});
