'use strict';

var Alexa = require('alexa-sdk');
var APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).

exports.handler = function (event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {

    'SayHelloIntent': function () {
        var nameSlot = this.event.request.intent.slots.name;
        var name;
        if (nameSlot && nameSlot.value) {
            name = nameSlot.value;
        }

        var speechOutput = this.t("SAY_HELLO", name);
        this.emit(':tell', speechOutput);
    }
};

var languageStrings = {
    "en-US": {
        "translation": {
            "SAY_HELLO" : "hello %s"
        }
    }
};