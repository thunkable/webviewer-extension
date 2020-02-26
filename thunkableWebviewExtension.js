var ThunkableWebviewExtension = {
  postMessage: function (message) {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    } else {
      window.parent.postMessage(message);
    }
  },
  receiveMessage: function(fxn) {
    document.addEventListener("message", fxn, false);
    window.addEventListener("message", fxn, false);
  }
}
