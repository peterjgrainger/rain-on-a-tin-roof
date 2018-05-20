import { request, response } from 'alexa-app/types';
import { Intent } from '../../models/intents/intent';
import { IntentDefinition } from '../../models/intents/intent-definition';

/**
 * Defines the Amazon default stop intent
 *
 * @class AmazonDefault
 * @implements {IntentDefinition}
 */
export class AmazonDefault extends Intent implements IntentDefinition {
    public name: string;
    public action: (request: request, response: response) => response;

    /**
     * Common functionality between all the default amazon intents
     * @param name intent name
     * @param action what to do on when intent is called
     */
    constructor(name: string, action: (request: request, response: response) => response) {
        super();
        const titlise = name.charAt(0).toUpperCase() + name.slice(1);
        this.name = 'AMAZON.' + titlise + 'Intent';
        this.action = action;
    }
}
