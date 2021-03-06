import Route from '@ember/routing/route';

export default Route.extend({
	model(params) {
		return this.store.peekRecord('developer', params.id);
	},
	actions: {
		saveDeveloper() {
			const model = this.controller.get('model');
			this.store.createRecord('developer', model);
			this.transitionTo('/');
		},
		goToBack() {
			this.transitionTo('/developer-list');
		},
		async fireDeveloper(id) {
			const developer = await this.store.peekRecord('developer', id);
			await developer.destroyRecord();

			this.transitionTo('developer-list');
		},
	}
});
