import { app } from 'alexa-app';
import { PublishingInformation } from '../publishing-information';
import { SkillExpressOptions } from '../server/ExpressOptions';
import { playbackNearlyFinished } from './events/playback-nearly-finished/playback-nearly-finished';
import { AmazonDefault } from './intents/amazon-default/amazon-default';
import { endAction } from './intents/end/end-action';
import { helpAction } from './intents/help/help-action';
import { Loop } from './intents/loop/loop';
import { Pause } from './intents/pause/pause';
import { Resume } from './intents/resume/resume';
import { stopAction } from './intents/stop/stop-action';
import { launch } from './launch/launch';
import { Intent } from './models/intents/intent';
import { IntentDefinition } from './models/intents/intent-definition';

/**
 * Extension of the alexa app module to provide a few
 * helper functions.
 *
 * @class AlexaApp
 * @extends app alexa app library
 */
export class AlexaApp extends app {
    constructor() {
        super("");
    }

    /**
     * Add all the required alexa intents plus one custom one.
     */
    public addIntents() {
        this.launch(launch);
        this.addIntent(new AmazonDefault('stop', stopAction));
        this.addIntent(new AmazonDefault('cancel', endAction));
        this.addIntent(new AmazonDefault('help', helpAction));
        this.addIntent(new Resume());
        this.addIntent(new Pause());
        this.addIntent(new Loop());
        // Continually loop the noise
        this.audioPlayer('PlaybackNearlyFinished', playbackNearlyFinished);

    }

    /**
     * Call the alexa app API.
     *
     * @param intentDefinition intent to add.
     */
    public addIntent(intentDefinition: IntentDefinition) {
        this.intent(intentDefinition.name, intentDefinition.schema(), intentDefinition.action);
    }

}
