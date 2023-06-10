const core = require('@actions/core');
const core = require('@actions/github');
const core = require('@actions/exec');

async function run() {
    core.notice('Hello from my custom JS action!')
}

run();