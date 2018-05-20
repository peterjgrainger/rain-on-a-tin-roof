import { Context, dialog, IntentRequest, LaunchRequest, request, RequestBody, response, session} from "alexa-app/types";
import test from 'ava';
import {Resume} from './resume';

test((t) => {
    const helloWorld = new Resume();

    t.plan(3);

    const testRequest = {
        confirmationStatus: '',
        context: {} as Context,
        data: {} as RequestBody,
        getDialog: () => ({} as dialog),
        getSession: () => ({} as session),
        hasSession: () => true,
        isAudioPlayer: () => false,
        isConfirmed: () => true,
        isPlaybackController: () => false,
        session: () => false,
        slot: () => 'person name',
        slots: {},
        type: () => "LaunchRequest",
    } as request;

    const testResponse = {

        audioPlayerPlayStream: (action, stream) => {
            t.is(action, 'REPLACE_ALL');
            return testResponse;
        },
        shouldEndSession: (shouldEnd) => {
            t.false(shouldEnd);
            return testResponse;
        },
    } as response;

    t.is(helloWorld.action(testRequest, testResponse), testResponse);

    t.is(helloWorld.name, 'AMAZON.ResumeIntent');

});
