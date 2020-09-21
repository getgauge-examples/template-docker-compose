/* globals gauge*/
"use strict";
const { text,click,button,link } = require('taiko');
const assert = require("assert");

step("Add item <item> to the cart.", async function (item) {
    await click(link(item));
    await click("Add to Card");
});

step("Checkout now", async function () {
    await click(button("Checkout Now!"));
});

step("Cart should now contain items <items>", async function(items) {
    for(let item of items.rows){
        assert.ok(await text(item.cells[0]).exists());
        assert.ok(await text(item.cells[1]).exists());
      }    
});