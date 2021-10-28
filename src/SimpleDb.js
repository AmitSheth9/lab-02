const path = require('path');
const shortid = require('shortid');

class SimpleDb {
  // eslint-disable-next-line no-unused-vars
  constructor(rootDir) {
    const fileName = `${shortid.generate()}.txt`;
    this.file = path.join(rootDir, fileName);
  }
}

module.exports = SimpleDb;
