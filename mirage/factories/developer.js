import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
	firstName(i) { return 'Developer' + i},
	lastName(i) { return 'LastName' + i },
	role: 'FE-developer',
	frameworks: ['React', 'Ember']
});
