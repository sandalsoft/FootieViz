import Ember from 'ember';
import PlayerAdapter from 'footieviz/adapters/player';


export default Ember.Route.extend({

  model: function(params) {
    var adapter = PlayerAdapter.create();
    return adapter.findAll('player');
  },
});
