import { exec } from "child_process";
import { readFileSync } from "fs";

/**
 * Read the skill ID and enable this skill.
 */

 // read the skill ID from the config.
const config = JSON.parse(readFileSync('./app/.ask/config', 'utf8'));
const skillId = config.deploy_settings.default.skill_id;

// Run the command in a child process
exec(`ask api enable-skill --skill-id ${skillId}`,
(error, stdout, stderr) => {
    process.stderr.write(error.message);
    process.stdout.write(stdout);
    process.stderr.write(stderr);
});
