import test from 'ava';
import { stopAction } from '../stop/stop-action';
import {AmazonDefault} from './amazon-default';

test((t) => {
    const stopIntent = new AmazonDefault('stop', stopAction);

    const response = {};
    t.is(stopIntent.name, 'AMAZON.StopIntent');
    t.deepEqual(stopIntent.schema().slots, {});
    t.deepEqual(stopIntent.schema().utterances, []);
    t.deepEqual(stopIntent.action, stopAction);
});

// test((t) => {
//     const stopIntent = new AmazonDefault('stop');
//     let mockRequest:Request = mock(Request);
//     let testRequest:Request = instance(mockRequest);

//     let mockResponse:response = mock(response);
//     let testResponse:response = instance(mockResponse);

//     t.plan(1);
//     const returnValue = stopIntent.action(testRequest, testResponse);

//     verify(returnValue.say).once;

// })
