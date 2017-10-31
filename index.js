/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

const util = require('util');
const request = require('simple-get');

const selfPkg = require('./package.json');

const requestConcat = (...args) =>
  new Promise((resolve, reject) => {
    request.concat(...args, (er, _, data) => {
      if (er) return reject(er);
      return resolve(data);
    });
  });

async function init() {
  const url = `https://charlike.localtunnel.me/probot-test-app/get/${selfPkg.name}`;
  const result = await requestConcat(url);
  const { pkg, npm } = JSON.parse(result.toString());
  console.log(pkg);
  console.log(npm);
}

init();
