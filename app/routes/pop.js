import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
    return this.store.find('artist', {
      name: 'pop',
      bucket: ['artist_location', 'urls']
    })
  }
});
