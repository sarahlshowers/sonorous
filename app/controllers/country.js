import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  stateValue: Ember.computed.alias('application.stateValue'),
  filteredArtists: function() {
    var artistState = this.get('stateValue');
    var artists = this.get('model');

    if (artistState) {
      return artists.filterBy('artist_location.region', artistState);
    } else {
      return artists;
    }
  }.property('stateValue')
});
