function sdkarate(api, sdk, sdkaction){
  sdk = sdk || {} ;
  if(sdkaction === undefined) sdkaction = SDKAction;
  for(action in api){
    if(typeof api[action] === 'function'){
     sdk = sdkaction(api, action, sdk);
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
