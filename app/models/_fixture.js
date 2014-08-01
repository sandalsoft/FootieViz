

export default DS.Model.extend({
  date_time: DS.attr(''),
  gameweek: DS.attr(''),
  opponent_team_id: DS.attr(''),
  is_homegame: DS.attr(''),
  player_id: DS.belongsTo('player'),
  created_at: DS.attr('')
});