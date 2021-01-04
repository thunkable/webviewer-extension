var ThunkableWebviewerExtension = (function () {
  const postMessageToWebview = (message) => {
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(message);
    } else {
      window.parent.postMessage(message, '*');
    }
  };

  const getReceiveMessageCallback = (fxn, hasReturnValue) => (event) => {
    if (typeof fxn === 'function') {
      if (event.data) {
        let dataObject;
        try {
          dataObject = JSON.parse(event.data);
        } catch (e) {
          // message is not valid json
        }
        if (dataObject && dataObject.type === 'ThunkablePostMessage' && hasReturnValue) {
          fxn(dataObject.message, (returnValue) => {
            const returnMessageObject = { type: 'ThunkablePostMessageReturnValue', uuid: dataObject.uuid, returnValue };
            postMessageToWebview(JSON.stringify(returnMessageObject));
          });
        } else if (!hasReturnValue && (!dataObject || dataObject.type !== 'ThunkablePostMessage')) {
          fxn(event.data);
        }
      }
    }
  };

  return {
    postMessage: postMessageToWebview,
    receiveMessage: function(fxn) {
      const callbackFunction = getReceiveMessageCallback(fxn, false);
      document.addEventListener('message', callbackFunction, false);
      window.addEventListener('message', callbackFunction, false);
    },
    receiveMessageWithReturnValue: function(fxn) {
      const callbackFunction = getReceiveMessageCallback(fxn, true);
      document.addEventListener('message', callbackFunction, false);
      window.addEventListener('message', callbackFunction, false);
    },
  };
})();
