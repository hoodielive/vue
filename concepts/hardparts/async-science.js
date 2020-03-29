/**
 * Web Browser has that Javascript does not have: (however, js can interface with these features):
 * devtools
 * console (console)
 * sockets
 * network requests (fetch, xhr)
 * html-dom (document)
 * timer (timeout)
 */

function printHello() {console.log("Hello")}
setTimeout(printHello, 1000)
console.log("Me First")
