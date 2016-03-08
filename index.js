function sdkarate(api, sdk){
  sdk = sdk || {} ;
  for(action in api){
    if(typeof api[action] === 'function'){
     sdk = SDKAction(api, action, sdk);
    }
  }
  return sdk;
}
function SDKAction (api, action, SDK){
  SDK[action] = function(options){
    return api[action](options);
  }
  return SDK
}

module.exports = sdkarate;
