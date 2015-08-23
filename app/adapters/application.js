import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://developer.echonest.com',
  namespace: 'api/v4',
  query: function(store, type, queryParams) {
    var url = this.buildURL(type.typeKey);
    var singularURL = url.substring(0, url.length-1);
    queryParams.api_key = 'RIDOQTZNDLWH4BHYH';
    console.log(queryParams);
    return this.ajax([singularURL, 'artists'].join('/'), 'GET', {data: queryParams})
  },
});
