import { Request, response } from "alexa-app/types";
import { EnqueueStream } from "../../models/streams/enqueue-stream";

/**
 * Event triggered when the playback is near the end of the previous
 * track
 *
 * @param request alexa-app request type
 * @param response alexa-app response type
 */
export function playbackNearlyFinished(request: Request, alexaResponse: response) {
        const previousToken = request.context.AudioPlayer.token;
        return alexaResponse.audioPlayerPlayStream('ENQUEUE', new EnqueueStream(previousToken));
}
