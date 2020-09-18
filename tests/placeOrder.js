/* globals gauge*/
"use strict";
const { text,click } = require('taiko');
const assert = require("assert");

step("Add item <item> to the cart.", async function (item) {
    await click(item);
    await click("Add to Card");
});

step("Checkout now", async function (item) {
    await click("Checkout Now!");
});

step("Cart should now contain items <items>", async function(items) {
    items.rows.forEach(function (row) {
        assert.ok(text(row.cells[0]).exists());
        assert.ok(text(row.cells[1]).exists());
      });    
});