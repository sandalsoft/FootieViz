import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var fixtures = this.store.find('fixture', {player_id: params.player_id});
    var player = this.store.find('player', params.player_id);
    player.fixtures = fixtures;
    return player;
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    // this.set('model', model);
  },
});
