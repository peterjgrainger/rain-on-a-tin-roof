import { request, response } from "alexa-app/types";
import { launch } from "../../launch/launch";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";

/**
 * Example Intent definition showing slots.
 *
 * @class HelloWorld
 */
export class Loop extends Intent implements IntentDefinition {
    // internal name of this intent
    public name = 'loop';
    // phrases that will start his intent
    public utterances = ['to loop', 'loop'];
    // Dynamic words in the request
    public slots = [];
    public action = launch;
}
