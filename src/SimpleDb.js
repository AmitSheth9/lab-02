const { writeFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDb {
  // eslint-disable-next-line no-unused-vars
  constructor(rootDir) {
    const fileName = `${shortid.generate()}.txt`;
    this.file = path.join(rootDir, fileName);
  }
  save(obj) {
    obj['id'] = this.fileName;
    const stringFile = JSON.stringify(obj);
    return writeFile(this.file, stringFile);
  }
}

module.exports = SimpleDb;

