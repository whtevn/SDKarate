var FacilityApi = require('./facility'); 

var Facility    = new FacilityApi();

var SDKarate    = require('../'); // <- would normally be 
                                  //    require('sdkarate')

var FacilitySDK = SDKarate(Facility);

module.exports = FacilitySDK;
