import { AlexaStream } from "./alexa-stream";

export class EnqueueStream extends AlexaStream {
    public expectedPreviousToken;
    constructor(previousToken: string) {
        super();
        this.expectedPreviousToken = previousToken;
        this.token = previousToken + '1';
    }
}
