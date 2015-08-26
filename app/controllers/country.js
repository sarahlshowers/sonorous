import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  stateValue: Ember.computed.alias('application.stateValue')
});
