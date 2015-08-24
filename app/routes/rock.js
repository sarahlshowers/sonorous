import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
    return this.store.find('artist', {
      name: 'rock',
      bucket: 'hotttnesss',
      results: '10'
    })
  }
});
