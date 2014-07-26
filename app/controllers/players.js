import Ember from 'ember';

export default Ember.Controller.extend({
  filteredPlayers: function() {
    return this.get('model');
  }.property(),

  actions: {
    filterByTeam: function(team_id) {
      this.set('filteredPlayers', this.get('model').filterBy('team_id', team_id));
    },

    filterByDreamteam: function() {
      this.set('filteredPlayers', this.get('model').filterBy('in_dreamteam', true));
    },

    allPlayers: function() {
      this.set('filteredPlayers', this.get('model'));
    },
  }
});
