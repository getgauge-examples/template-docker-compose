"use strict";
const { text } = require('taiko');

step("Show a message <message>", async function (message) {
    console.log("show a message")
    await text(message);    
});