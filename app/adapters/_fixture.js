
import ajax from 'ic-ajax';

export default DS.RESTAdapter.extend({
  host: window.FootieVizENV.HOST,
  namespace: window.FootieVizENV.NAMESPACE,

  defaultSerializer: '-default',

 find: function(player_id){
  var id = "204";
  window.console.log('obj: ' + id);
  return ajax(this.get('host') + '/' + this.get('namespace') + '/' + 'fixtures?filter[where][player_id]=' + id);
  }

});
