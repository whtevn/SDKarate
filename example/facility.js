var Routest = require('routest');
var FacilityApi = Routest("core-facilities.definition.json"
  , "Facility"
  , {
    list: {
      path: "organization/:organization_id/facility/"
      , method: "GET"
    },
    get: {
      path: "facility/:facility_id/"
      , method: "GET"
    },
    create: {
      path: "organization/:organization_id/facility/"
      , method: "POST"
    },
    update: {
      path: "facility/:facility_id/"
      , method: "PUT"
    },
    suspend: {
      path: "facility/:facility_id/"
      , method: "DELETE"
    }
  })

module.exports = FacilityApi
