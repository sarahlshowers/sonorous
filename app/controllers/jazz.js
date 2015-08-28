import Ember from 'ember';

export default Ember.Controller.extend({
  application: Ember.inject.controller(),
  stateValue: Ember.computed.alias('application.stateValue'),
  stateText: Ember.computed.alias('application.stateText'),

  filteredArtists: function() {
    var stateShort = this.get('stateValue');
    var stateLong = this.get('stateText');
    var artists = this.get('model');

    return artists.filter(function(artist) {
      return artist.get('artist_location.region') === stateLong ||
        artist.get('artist_location.region') === stateShort;
    });

    if (artists.filter.length) {
      $('no-results').css('display:block');
    }

  }.property('stateValue', 'stateText')
});
