import Ember from 'ember';

export default Ember.ArrayController.extend({

  // totalPoints: function() {
  //   return this.get('model').computed.sum('total_points');
  //   }.property('model.@each'),

  totalPointsArray: Ember.computed.mapBy('model', 'total_points'),
  totalPoints: Ember.computed.sum('totalPointsArray'),

  totalGoalsArray: Ember.computed.mapBy('model', 'goals_scored'),
  totalGoals: Ember.computed.sum('totalGoalsArray'),

    

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
      return rx.test(player.web_name) || 
        rx.test(player.full_name) ||
        rx.test(player.type_name) || 
        rx.test(player.team_name);
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
