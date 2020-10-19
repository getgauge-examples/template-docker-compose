"use strict";
const assert = require("assert");

const { textBox,below, click, write } = require('taiko');

step("Sign up as <customer> with email <email> and <password>", async function (customer,email,password) {
    try{
        await click("Sign up");
        await write(customer,textBox(below("Username")));
        await write(email,textBox(below("Email Address")));
        await write(password,textBox(below("Password")));
        await write(password,textBox(below("Confirm Password")));

        await click("Sign up",below("Confirm Password"));    
    }
    catch(err){
        console.log(err)
    }
});