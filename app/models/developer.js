import DS from 'ember-data';

const {
	attr,
	Model
} = DS;

export default Model.extend({
	firstName: attr('string'),
	lastName: attr('string'),
	role: attr('string'),
	frameworks: attr('string')
});
