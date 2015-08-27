import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    getState: function(stateValue, stateText) {
      this.controllerFor('application').set('stateValue', stateValue);
      this.controllerFor('application').set('stateText', stateText);
      this.transitionTo('genre');
    }
  }
});
