import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizePayload: function(payload) {
    delete payload.response.status;
    return payload.response;
  }
});
