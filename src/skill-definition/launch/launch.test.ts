import { Request, response } from "alexa-app/types";
import test from 'ava';
import {launch} from './launch';

test((t) => {

    t.plan(2);

    const testRequest = {};

    const testResponse = {

        audioPlayerPlayStream: (action, stream) => {
            t.is(action, 'REPLACE_ALL');
            return testResponse;
        },
    } as response;

    t.is(launch(testRequest, testResponse), testResponse);

});
