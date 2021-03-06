import Component from '@ember/component';
import Ember from 'ember';

const { computed } = Ember;

export default Component.extend({
	isMultiple: false,
	isOpen: false,
	selected: null,
	items: null,
	label: null,
	placeholder: null,
	removeWindowEvent: computed('isOpen', function() {
		window.removeEventListener('click', this._onWindowClick);
	}),
	onClickOutsideHandler(e) {
		e.stopPropagation();
		e.preventDefault();
		const node = document.querySelector('.selected');

		if (node === e.target) return;

		if (!this.get('options').length) return;

		this.set('isOpen', false);
		window.removeEventListener('click', this._onWindowClick);
	},
	didInsertElement() {
		this._onWindowClick = this.onClickOutsideHandler.bind(this);
	},
	willDestroyElement() {
		window.removeEventListener('click', this._onWindowClick);
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

			if (!isMultiple) {
				this.set('selected', []);

				return;
			}

			const newSelected = selected.filter(selected => selected !== item);

			this.set('selected', newSelected);
		},
		onSelect(item) {
			const selected = this.get('selected');
			const isMultiple = this.get('isMultiple');

			if (isMultiple) {
				if (selected && selected.includes(item)) return selected;

				this.set('selected', [...selected || [], item])
			} else {
				this.set('selected', [item])
			}
		},
		toggleDropdown() {
			if (!this.get('options').length) return;

			if (!this.get('isOpen')) {
				window.addEventListener('click', this._onWindowClick);
			} else {
				window.removeEventListener('click', this._onWindowClick);
			}

			this.set('isOpen', !this.get('isOpen'));
		}
	}
});
