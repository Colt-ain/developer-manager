import Route from '@ember/routing/route';
import Ember from 'ember';
import { filterBy } from '@ember/object/computed';

export default Route.extend({
	store: Ember.inject.service('store'),
	async model() {
		return Ember.RSVP.hash({
			developers: this.store.findAll('developer')
				.catch(err => console.error(err))
		});

	},
	actions: {
		gotoNew() {
			this.transitionTo('/developer/new');
		},
		async fireDeveloper(id) {
			const developer = await this.store.peekRecord('developer', id);
			await developer.destroyRecord();
		},
		editDeveloper(id) {
			this.transitionTo(`/developer/edit/${id}`);
		}
	}
});
