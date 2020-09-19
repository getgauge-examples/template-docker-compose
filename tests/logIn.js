"use strict";
const { write, text,click,below,into,textBox,link } = require('taiko');

step("Give an option to Log In", async function () {
    await link("Log in").exists();    
});

step("Show the log in status for user <name>", async function (name) {
    await text("Welcome "+name+"! Not you?");    
});

step("Login as name <name> and <password>", async function (name,password1) {
    await click("Log in");
    await write(name,textBox(below("Username or Email Address")));
    await write(password1,into(textBox("password")));
    await click("Log in",below("Password"));
});
