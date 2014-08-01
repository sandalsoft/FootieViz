import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var owner_id = "53cff023d7bf060000850910"
    return this.store.find('owner', owner_id);
  },
});
