const core = require('@actions/core');
const github = require('@actions/github');

try {
  core.setOutput("post-result", 1);
} catch (error) {
  core.setFailed(error.message);
}