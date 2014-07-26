import Ember from 'ember';

export default Ember.ArrayController.extend({

  filter: '',

  filterDidChange: function() {
    this.applyFilter();
  }.observes('filter'),

  applyFilter: function() {
    var filtered;
    var filter = this.get('filter');
    var rx = new RegExp(filter, 'gi');
    var filteredPlayers = this.get('model');

    if (!filter) {
      return this.set('filtered_players', filteredPlayers);
    }

    filtered = filteredPlayers.filter(function(player) {
      return rx.test(player.get('web_name')) || 
        rx.test(player.get('full_name')) ||
        rx.test(player.get('type_name')) || 
        rx.test(player.get('team_name'));
    });

    this.set('filtered_players', filtered);
  },

  filtered_players: function() {
    return this.get('model').sortBy('web_name');
  }.property(),

  actions: {
    filter_by_team: function(team_id) {
      this.set('filtered_players', this.get('model').filterBy('team_id', team_id));
    },

    filter_by_dreamteam: function() {
      this.set('filtered_players', this.get('model').filterBy('in_dreamteam', true));
    },

    all_players: function() {
      this.set('filtered_players', this.get('model'));
    },
  }
});
