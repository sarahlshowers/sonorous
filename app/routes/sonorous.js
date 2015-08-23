import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.store.find('genre', {
      name: 'jazz',
      bucket: 'hotttnesss',
      results: '10'
    })
  }
});
