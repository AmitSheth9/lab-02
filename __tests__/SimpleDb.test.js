const { mkdir, rm } = require('fs/promises'); 

// eslint-disable-next-line no-unused-vars
const SimpleDb = require('../src/SimpleDb');

describe('SimpleDb', () => {
  const rootDir = './__tests__/root';
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });
  it.only('saves and assign a unique id and serialize the object', () => {
    const db = new SimpleDb(rootDir);
    const obj = {
      stuff: 'some stuff',
    };
    const objAfter = {
      stuff: 'some stuff',
      id: expect.any(Number)
    };
    return db
      .save(obj)
      .then((something) =>
        expect(something).toEqual(objAfter));
  }); 
    
});
