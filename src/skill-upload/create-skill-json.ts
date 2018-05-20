import {readSync} from 'clipboardy';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import {uploadFile} from 'imgur';
import * as prompt from "prompt";
import {promisify} from "util";
import { config } from '../config';
import { PublishingInformation } from "../publishing-information";
import { AlexaApp } from "../skill-definition/alexa-app";
import { askConfig } from "./ask-config";
import { ImageLinks } from "./image-links";
import { interactionModel } from "./interaction-model";
import { skill } from "./skill";

const urlRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;

/**
 * Self running funciton.
 */
// tslint:disable-next-line:only-arrow-functions
void async function() {
    // Read url from the clipboard
    const nowJson = readFileSync('./now.json', 'UTF8');
    const alias = JSON.parse(nowJson).alias;
    const url = `https://${alias}.now.sh`;

    // initialise the app.
    const alexaApp = new AlexaApp();
    alexaApp.addIntents();

    // upload the image
    const image = new ImageLinks();
    await image.upload();

    // Make the folder structure
    if (!existsSync(`./app`)) {
        mkdirSync(`./app`);
        if (!existsSync(`./app/models/`)) {
            mkdirSync(`./app/models/`);
        }

        // only make a new config if required
        if (!existsSync(`./app/.ask/`)) {
            mkdirSync(`./app/.ask/`);
            writeFileSync(`./app/.ask/config`, JSON.stringify(askConfig, null, 2));
        }
    }

    const convertedModel = JSON.stringify(interactionModel(Object.values(alexaApp.intents),
                                                           PublishingInformation),
                                          null,
                                          2);

    // Make the three required files for Amazon
    writeFileSync(`./app/skill.json`, JSON.stringify(skill(url, PublishingInformation, image), null, 2));
    // create a new file per locale.  All the same
    config.locales.forEach((value) => writeFileSync(`./app/models/${value}.json`, convertedModel));
}();
