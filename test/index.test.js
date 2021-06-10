const config = require('../index');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

const p1 = Array.isArray(config.plugins);

if (!p1) {
  console.error('error: plugins is not array.');
  process.exit(1);
}

const p2 = Array.isArray(config.extends);

if (!p2) {
  console.error('error: extends is not array.');
  process.exit(1);
}

const p3 = isObject(config.rules);

if (!p3) {
  console.error('error: rules is not object.');
  process.exit(1);
}

console.info('done: all passing.');
