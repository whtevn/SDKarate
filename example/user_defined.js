var FacilityDefinition = require('./facility'); 

var Facility    = new FacilityDefinition();

var SDKarate    = require('../'); // <- would normally be 

var axios       = require('axios');

function routify(route_path, args){
  for(arg in args){
    route_path = route_path.replace(":"+arg, args[arg]);
  }
  return route_path;
}

function make_url(url){
  return url.scheme+url.host+':'+url.port+url.path
}
                                  //    require('sdkarate')
var FacilitySDK = SDKarate(Facility, {}, (function(facility){
   return function(api, action, SDK){
      SDK[action] = function(options){
        return facility 
              .__definition
              .then(function(def){
                var route = facility.__methods[action]
                var url = make_url(def._options);
                return axios.create({
                      baseURL: url,
                      headers: def._options.headers
                  }).request({
                    method: route.method,
                    path: routify(route.path, options.route),
                    params: route.query,
                    body: route.body,
                    headers: options.headers
                  })
              })
      }
      return SDK;
  }
})(FacilityDefinition));
module.exports = FacilitySDK;
