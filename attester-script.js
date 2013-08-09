#!/usr/bin/env node

var attester = require("attester");
var cowsay = require("cowsay");

// Global attester configuration
attester.config.set({
	"phantomjs-instances": 2
});

// Called when the campaign completes successfully
attester.event.once("attester.core.idle", campaignSuccess);

// Called when the campaign fails
attester.event.once("attester.core.fail", campaignFail);

// Create a campaign with a given configuration
attester.campaign.create(attester.config.readFile("campaign.yml"));

// Start the test campaign
attester.start();


// Until now it's the general structure of a module using attester
// the part below is my own logic

function campaignSuccess () {
	console.log(cowsay.say({
		text: "That's cool, no error!",
		e: "^^"
	}));
	process.exit(0);
}

function campaignFail () {
	console.log(cowsay.think({
		text: "Didn't expect that! The campaign failed",
		e: "oO",
		T: " U"
	}));
	process.exit(1);
}
