import { Context, dialog, IntentRequest, LaunchRequest, request, RequestBody, response, session} from "alexa-app/types";
import test from 'ava';
import { AlexaStream } from "../../models/streams/alexa-stream";
import { EnqueueStream } from "../../models/streams/enqueue-stream";
import {playbackNearlyFinished} from './playback-nearly-finished';

test((t) => {

    t.plan(3);

    const testRequest = {
        confirmationStatus: '',
        context: {
            AudioPlayer: {
                token: 'some-previous-token',
            },
        } as Context,
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
            t.is(action, 'ENQUEUE');
            t.deepEqual(stream, new EnqueueStream('some-previous-token'));
            return testResponse;
        },
    } as response;

    t.is(playbackNearlyFinished(testRequest, testResponse), testResponse);

});
