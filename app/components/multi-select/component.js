import Component from '@ember/component';
import Ember from 'ember';

const { computed } = Ember;

export default Component.extend({
	isMultiple: false,
	isOpen: false,
	selected: null,
	items: null,
	label: null,
	removeWindowEvent: computed('isOpen', function() {
		const isOpen = this.get('isOpen');

		if (isOpen) {
			window.removeEventListener('click', this.onClickOutsideHandler.bind(this));
		}
	}),
	onClickOutsideHandler(e) {
		e.stopPropagation();
		e.preventDefault();
		const node = document.querySelector('.selected');

		if (node === e.target) return;

		if (!this.get('options').length) return;

		this.set('isOpen', false);
		window.removeEventListener('click', this.onClickOutsideHandler.bind(this));
	},
	willDestroyElement() {
		window.removeEventListener('click', this.onClickOutsideHandler);
	},
	options: computed('items.@each', 'selected.@each', function() {
		const items = this.get('items');
		const selected = this.get('selected') || [];

		return items ? items.filter(item => !selected.includes(item)) : items;
	}),
	actions: {
		removeFromSelected(item) {
			const selected = this.get('selected');
			const isMultiple = this.get('isMultiple');

			const newSelected = selected.filter(selected => selected !== item);

			this.set('selected', isMultiple ? newSelected : []);
		},
		onSelect(item) {
			const selected = this.get('selected');
			const isMultiple = this.get('isMultiple');

			if (isMultiple) {
				if (selected.includes(item)) return selected;

				this.set('selected', [...selected, item])
			} else {
				this.set('selected', [item])
			}
		},
		toggleDropdown() {
			if (!this.get('options').length) return;

			if (!this.get('isOpen')) {
				window.addEventListener('click', this.onClickOutsideHandler.bind(this));
			} else {
				window.removeEventListener('click', this.onClickOutsideHandler.bind(this));

			}

			this.set('isOpen', !this.get('isOpen'));
		}
	}
});
