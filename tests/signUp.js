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

step("See items available for purchase.", async function () {
    // const products = await page().evaluate(
    //     () => Array.from(document.body.querySelectorAll('.product'))
    // );
    // assert.ok(products.length>0,"Atleast on product should be available for purchase")
});