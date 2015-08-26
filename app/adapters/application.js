import Ember from 'ember';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://developer.echonest.com',
  namespace: 'api/v4/genre',
  query: function(store, type, queryParams) {
    var url = this.buildURL(type.typeKey);
    queryParams.api_key = 'RIDOQTZNDLWH4BHYH';
    Ember.$.ajaxSettings.traditional = true;
    return this.ajax(url, 'GET', {data: queryParams})
  },
});
