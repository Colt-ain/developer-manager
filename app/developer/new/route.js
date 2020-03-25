import Ember from 'ember';
import Route from '@ember/routing/route';
import getAvatar from '../../helpers/getAvatar';

const { RSVP } = Ember;

export default Route.extend({
	model() {
		const avatar = getAvatar();

		return RSVP.hash({
			id: Math.floor(Math.random() * 1000).toString(),
			firstName: '',
			lastName: '',
			role: '',
			frameworks: [],
			avatar,
		});
	},
	actions: {
		saveDeveloper() {
			const model = this.controller.get('model');
			this.store.createRecord('developer', model);
			this.transitionTo('/');
		},
		goToBack() {
			this.transitionTo('/developer-list');
		}
	}
});
