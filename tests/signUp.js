"use strict";
const assert = require("assert");

const { $, click, write } = require('taiko');

step("Sign up as <customer> with email <email> and <password>", async function (customer,email,password) {
    try{
        await click("Sign up");
        await write(customer,"Username");
        await write(email,"Email Address");
        await write(password,$("#user_password"));
        await write(password,$("#user_password_confirmation"));
        await click("Sign up");    
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