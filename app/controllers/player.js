import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: "players",
  totalPoints: Ember.computed.alias('controllers.players.totalPoints'),
  totalGoals: Ember.computed.alias('controllers.players.totalGoals'),
});
