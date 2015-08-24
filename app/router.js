import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sonorous');
  this.route('jazz');
  this.route('rock');
  this.route('country');
  this.route('pop');
  this.route('folk');
  this.route('latin');
});

export default Router;
