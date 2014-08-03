import PlayerAdapter from 'footieviz/adapters/player';
import Ember from 'ember';


export default Ember.Route.extend({
  model: function(params) {
    var adapter = PlayerAdapter.create();
    return adapter.find('player', params.player_id);
  },

  setupController: function(controller, model) {
    this._super(controller, model);
    // this.set('model', model);
  },
});
