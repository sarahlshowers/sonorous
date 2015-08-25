import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
		getState: function() {
      var getState = document.getElementById('select-state');
      var getStateValue = e.options[e.selectedIndex].value;
		}
	}
});
