import * as Express from 'express';
import * as pino from "express-pino-logger";
import { AlexaApp } from "../skill-definition/alexa-app";
import { SkillExpressOptions } from "./ExpressOptions";

const app = Express();
const logger = pino();
app.use(pino());
const PORT = process.env.PORT || 3000;

const alexaApp = new AlexaApp();

alexaApp.express(new SkillExpressOptions(app));

alexaApp.addIntents();

app.listen(PORT);
