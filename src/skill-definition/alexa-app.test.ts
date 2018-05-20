import test from 'ava';
import {AlexaApp} from './alexa-app';

test((t) => {
const alexaApp = new AlexaApp();
alexaApp.addIntents();
t.is(!!alexaApp, true);
t.is(alexaApp.name, '');

});
