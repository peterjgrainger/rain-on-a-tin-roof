import { readFileSync } from 'fs';
import * as opn from 'opn';

const config = JSON.parse(readFileSync('./app/.ask/config', 'utf8'));

opn(`https://developer.amazon.com/edw/home.html#/skill/${config.deploy_settings.default.skill_id}/en_GB/testing`);
