var FacilityApi = require('./facility'); 

var Facility    = new FacilityApi();

var SDKarate    = require('../');

var FacilitySDK = SDKarate(Facility);

module.exports = FacilitySDK;
