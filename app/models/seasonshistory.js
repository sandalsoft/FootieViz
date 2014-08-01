

export default DS.Model.extend({
  season: DS.attr(''),
  minutes_played: DS.attr(''),
  goals_scored: DS.attr(''),
  assists: DS.attr(''),
  clean_sheets: DS.attr(''),
  goals_conceded: DS.attr(''),
  own_goals: DS.attr(''),
  penalties_saved: DS.attr(''),
  penalties_missed: DS.attr(''),
  yellow_cards: DS.attr(''),
  red_cards: DS.attr(''),
  saves: DS.attr(''),
  bonus: DS.attr(''),
  ea_sports_ppi: DS.attr(''),
  net_transfers: DS.attr(''),
  value: DS.attr(''),
  points: DS.attr(''),
  player_id: DS.attr(''),
  created_at: DS.attr('')  
});
