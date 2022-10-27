
# Whatsapp notification alert

Due to some bug or what, whatsapp web was not playing sound when a new message arrived. Tried with different browsers with differect accounts.
But the issue didn't got fixed. So made this chrome extension.


## Working
This extension just monitors the change in the page title. If there is an increase in the number of unread counts, it plays a sound.
Tried other methods to listen to incoming messages, but Whatsapp uses encryption so cant sniff the packets sent or recieved.


## How to use

1. Clone the project
2. Open chrome
3. Open extensions manager in chrome ```chrome://extensions/```
4. Click on load unpacked and select the root directory of the cloned repo
5. That's it!!!