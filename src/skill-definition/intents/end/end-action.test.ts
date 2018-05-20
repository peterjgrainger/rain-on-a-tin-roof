import { Request, request, response } from "alexa-app/types";
import test from 'ava';
import { PublishingInformation } from '../../../publishing-information';
import {endAction} from './end-action';

test((t) => {

    t.plan(2);

    const testRequest = {} as request;
    const testResponse = {
        audioPlayerStop: (input) => {
            t.is(input, undefined);
            return testResponse;
        },
    } as response;

    t.is(endAction(testRequest, testResponse), testResponse);

});
