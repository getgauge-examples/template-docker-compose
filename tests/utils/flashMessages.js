"use strict";
const { text } = require('taiko');

step("Show a message <message>", async function (message) {
    await text(message);    
});