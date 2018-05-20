import {ExpressOptions} from 'alexa-app';
import * as Express from 'express';

/**
 * Default express options to allow handling
 * of request by express.
 */
export class SkillExpressOptions implements ExpressOptions {
    public expressApp;
    // This is required by Amazon
    public checkCert = true;

    public debug: true;

    constructor(app: any) {
        this.expressApp = app;
    }
}
