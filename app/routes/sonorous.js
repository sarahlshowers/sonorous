import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    getState: function(stateValue) {
      console.log(stateValue);
      this.controllerFor('application').set('stateValue', stateValue);
      this.transitionTo('genre');
    }
  }
});
