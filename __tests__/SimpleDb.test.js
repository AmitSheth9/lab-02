const { mkdir, rm } = require('fs/promises'); 
// eslint-disable-next-line no-unused-vars
const SimpleDb = require('../src/SimpleDb');

describe('SimpleDb', () => {
  const rootDir = './__tests__/root';
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });
  it('saves and assign a unique id and serialize the object', () => {
    const db = new SimpleDb(rootDir);
    const obj = {
      stuff: 'some stuff',
    };
    // eslint-disable-next-line no-unused-vars
    const objAfter = {
      stuff: 'some stuff',
      id: expect.any(String)
    };
    return db
      .save(obj)
      .then(() => db.get(obj.id))
      .then((something) =>
        expect(something).toEqual(objAfter));
      
    
  }); 

  it.only ('reads dir and returns array of all objects', () => {
    const newDb = new SimpleDb(rootDir);
    const obj1 = {
      stuff: 'some stuff in here',
      data: 'some data'
    };
    const obj2 = {
      stuff: 'different stuff',
      data: 'different data'
    };
    const objArr = [obj1, obj2];
  
  
    return newDb.save(obj1)
      .then(() => newDb.save(obj2))
      .then(() => newDb.save(obj2))
      .then(() => newDb.getAll())
      .then((something) => expect(something).toEqual(objArr));
  }); 
});
