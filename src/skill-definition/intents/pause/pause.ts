import { request, response } from "alexa-app/types";
import { Intent } from "../../models/intents/intent";
import { IntentDefinition } from "../../models/intents/intent-definition";
import { endAction } from "../end/end-action";

/**
 * Example Intent definition showing slots.
 *
 * @class HelloWorld
 */
export class Pause extends Intent implements IntentDefinition {
    // internal name of this intent
    public name = 'AMAZON.PauseIntent';
    // phrases that will start his intent
    public utterances = [];
    // Dynamic words in the request
    public slots = [];
    public action = (alexaRequest: request, alexaResponse: response) =>
        alexaResponse.audioPlayerStop()
}
