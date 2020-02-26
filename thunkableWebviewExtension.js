var ThunkableWebviewExtension = {
  postMessage: function (message) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    } else {
      window.parent.postMessage(message, '*');
    }
  },
  receiveMessage: function(fxn) {
    var callbackFunction = function(event) {
      if (typeof fxn === 'function') {
        fxn(event.data)
      }
    };
    document.addEventListener('message', callbackFunction, false);
    window.addEventListener('message', callbackFunction, false);
  }
}
