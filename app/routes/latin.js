import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
    return this.store.find('artist', {
      name: 'latin',
      bucket: ['artist_location', 'urls']
    })
  }
});
