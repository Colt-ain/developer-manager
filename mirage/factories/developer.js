import Mirage from 'ember-cli-mirage';
import faker from 'faker';

export default Mirage.Factory.extend({
	firstName() { return faker.name.firstName() },
	lastName() { return faker.name.lastName() },
	role: function () {
		const roles = ['FE-developer', 'BE-developer', 'FullStack-developer'];

		return faker.random.arrayElement(roles);
	},
	frameworks() {
		const frames = ['React', 'Angular', 'Ember', 'Meteor', 'Express'];
		const getIndex = function(min, max) {
			return faker.random.number({min, max});
		};
		const length = getIndex(1, 5);

		const createIndexesArray = function() {
			const res = [];

			for (let i = 0; i < length; i++) {
				const el = faker.random.arrayElement(frames);
				if (!res.includes(el)) {
					res.push(el);
				}
			}

			return res;
		};

		return createIndexesArray();
	},
	avatar() {
		const icons = ['em-face_vomiting', 'em-face_with_cowboy_hat', 'em-expressionless', 'em-female-farmer', 'em-face_with_monocle', 'em-female-firefighter'];

		return faker.random.arrayElement(icons);
	}
});
