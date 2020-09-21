"use strict";
const { click,link } = require('taiko');
const assert = require("assert");

step("Log out the customer", async function () {
    await click("Log out");    
});

step("Clear previous login", async function (message) {
    try{
        assert.ok(await link("Log in").exists())
    }catch(err){
        console.log("here")
        await click("Log out")    
    }
});

step("Give an option to Log Out", async function () {
    assert.ok(await link("Log out").exists());
});
