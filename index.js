/**
 * @copyright 2017-present, Charlike Mike Reagent <olsten.larck@gmail.com>
 * @license Apache-2.0
 */

const util = require('util');
const request = require('simple-get');

const pkg = require('./package.json');

const requestConcat = (...args) =>
  new Promise((resolve, reject) => {
    request.concat(...args, (er, _, data) => {
      if (er) return reject(er);
      return resolve(data);
    });
  });

async function init() {
  const url = `https://charlike.localtunnel.me/probot-test-app/get/${pkg.name}`;
  const { pkg, npm } = await requestConcat(url);

  console.log(pkg, npm);
}

init();
