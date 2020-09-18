"use strict";
const { write, text,click,into } = require('taiko');

step("Give an option to Log In", async function () {
    await link("Log in").exists();    
});

step("Show the log in status for user <name>", async function (name) {
    await text("Welcome "+name+"! Not you?");    
});

step("Login as name <name> and <password>", async function (name,password) {
    await click("Log in");
    await write(name,into("Username or Email Address"));
    await write(password,$("#password"));
    await click("Log in");
});
