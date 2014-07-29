import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('player', params.player_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    // this.set('model', model);
  },
});
