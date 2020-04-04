# Thunkable Web Viewer Extensions

Send a message between your Thunkable app and your website in a Web Viewer.

## Example

### Project
https://x.thunkable.com/copy/751ecbcadd406b3e4e31a5f3fb0690cf

### Website code
https://github.com/thunkable/webview-extension/blob/master/examples/simple.html

## Setup

In the <head> tag of your website, include the script tag below

```
<script src="https://thunkable.github.io/webview-extension/thunkableWebviewExtension.js" type="text/javascript"></script>
```
  
## Send a message from Thunkable to your website

Use these blocks to send a message to your website
![Send message blocks](https://thunkable.github.io/digital-asset/webviewer-extension/sendMessage.png)

On your website, include the code below:
```
// when we get a message from the app, display it on the page
ThunkableWebviewExtension.receiveMessage(function(message) {
  // Do something with your message
  alert(message)
});
```


## Send a message from your website to Thunkable

Use these blocks to receive a message from your website
![Receive message blocks](https://thunkable.github.io/digital-asset/webviewer-extension/receiveMessage.png)

On your website, include the code below
```
ThunkableWebviewExtension.postMessage('hello world');
```
