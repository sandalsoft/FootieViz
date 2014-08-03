import Ember from 'ember';
import PlayerAdapter from 'footieviz/adapters/player';


export default Ember.Route.extend({

  model: function() {
    var adapter = PlayerAdapter.create();
    return adapter.findAll('player');
  },
});
