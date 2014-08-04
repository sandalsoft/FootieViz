import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Object.extend({
  host: window.FootieVizENV.HOST,
  namespace: window.FootieVizENV.NAMESPACE,


  
  find: function(name, id) {
    // http://l:3000/api/Players/53dd84d79de1cf0000f460ac
    var url = this.get('host') + '/'+ this.get('namespace') + "/" + name +  "s" + "/" +id;
    return ajax(url);
  },

  findAll: function(name) {
    // http://l:3000/api/Players/5513o0ei138fg1f3
    var url = this.get('host') + '/' +  this.get('namespace') + "/" + name + 's';
    return ajax(url);
  },

});
