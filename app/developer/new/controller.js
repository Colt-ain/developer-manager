import Controller from '@ember/controller';

export default Controller.extend({
	frameworks: ['React', 'Angular', 'Ember', 'Meteor', 'Express'],
	roles: ['FE-developer', 'BE-developer', 'FullStack-developer'],
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
