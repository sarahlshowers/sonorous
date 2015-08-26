import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  artist_location: DS.attr(),
  urls: DS.attr()
});
