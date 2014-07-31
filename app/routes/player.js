import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var player_id = params.player_id;
    window.console.log('player_id: ' + player_id);
    var fixtures = this.store.find('fixture', params.player_id);
    var player = this.store.find('player', params.player_id);
    player.fixtures = fixtures;
    return player;
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    // this.set('model', model);
  },
});
