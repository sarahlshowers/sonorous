import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		getState: function() {
      var selectEl = document.getElementById('select-state');
      var stateValue = selectEl.options[selectEl.selectedIndex].value;
      this.sendAction('action', stateValue);
    }
	}
});
