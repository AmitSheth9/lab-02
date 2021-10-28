
const { writeFile, readFile } = require('fs/promises');
const path = require('path');
const shortid = require('shortid');

class SimpleDb {
  constructor(rootDir) {
    this.rootDir = rootDir;
  }
  save(obj) {
    obj.id = shortid.generate();
    this.fileName = `${obj.id}.json`;
    this.filePath = path.join(this.rootDir, this.fileName);
    console.log(obj);
    const stringObj = JSON.stringify(obj);
    console.log(stringObj);
    return writeFile(this.filePath, stringObj);
  }

  get(id) {
    const fileName = `${id}.json`;
    this.filePath = path.join(this.rootDir, fileName);
    const parsedFile = readFile(this.filePath, 'utf8').then((file) => JSON.parse(file)
    );
    return parsedFile;
  }

  getAll() {
    
  }

}
/*
const rootDir = './__tests__/root';
const consoleDb = new SimpleDb(rootDir);
const obj = { test: 'test purposes' };
console.log(consoleDb.save(obj));

*/
module.exports = SimpleDb;

