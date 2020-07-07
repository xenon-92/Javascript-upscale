<!-- @format -->

# Sending message across window objects via window.postMessage

<br><br>

## Here we are sending the message from Parent window to child window

> we are keeping the reference of the child window in the parent window via
> <code><br>
> targetWindowRefrence = window.open(<br>
> 'popup.html',<br>
> 'popup',<br>
> 'height=300px, width=500px'<br>
> );<br> ></code><br>
> we then use this <code>targetWindowRefrence</code> to post mesage via
> <code> targetWindowRefrence.postMessage(textareaVal, '\*');</code>

<br><br>

## On the reciever side, we use the <code>window.addEventListener('message',...)</code> to listen to the message sent form the parent

<br><br>

> note that in the popup, <code>window equivalents to targetWindowRefrence of parent</code>
