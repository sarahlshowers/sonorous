import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		getState: function() {
      var selectEl = document.getElementById('select-state');
      var stateValue = selectEl.options[selectEl.selectedIndex].value;
      var stateText = selectEl.options[selectEl.selectedIndex].text;

      this.sendAction('action', stateValue, stateText);
    }
	}
});
