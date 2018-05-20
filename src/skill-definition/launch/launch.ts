import { Request, response } from "alexa-app/types";
import { AlexaStream } from "../models/streams/alexa-stream";

/**
 * Required alexa intent.  Only change the wording after
 * ended in the response, but you don't need to.
 *
 * @param request alexa-app request type
 * @param response alexa-app response type
 */
export function launch(request: Request, alexaResponse: response) {
        return alexaResponse.audioPlayerPlayStream('REPLACE_ALL', new AlexaStream());
}
