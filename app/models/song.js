import DS from 'ember-data';

export default DS.Model.extend({
  artist_id: DS.attr(),
  artist_name: DS.attr(),
  title: DS.attr()
});
