# CommanderBot
A work in progress bot that intends to broadcast the voice chat of an individual to another channel.

Issues:
1. bot2.js sometimes tries to read 'voutput' before the Readable is assigned to it.
2. the 'voutput' stream is destroyed when it stops receiving voice input from the user, and bot2.js cannot reconnect to it.

Solutions:
1. implement a way too continuously read 'voutput', or listen for when 'setInStream()' is called.
2. have bot.js call setInStream() whenever the user starts talking.
