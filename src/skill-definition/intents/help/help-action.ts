import { request, response } from "alexa-app/types";

/**
 * Required
 *
 * @param request
 * @param response
 */
export function helpAction(alexaRequest: request, alexaResponse: response) {
    // tslint:disable-next-line:max-line-length
    return alexaResponse.say('Sound continuously plays until you say, Alexa stop, Alex pause or Alexa end').shouldEndSession(false);
}
