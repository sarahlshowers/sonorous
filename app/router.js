import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('sonorous', {path: '/'});
  this.route('jazz');
  this.route('rock');
  this.route('country');
  this.route('pop');
  this.route('folk');
  this.route('latin');
  this.route('genre');
});

export default Router;
