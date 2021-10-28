const { mkdir, rm } = require('fs/promises'); 

// eslint-disable-next-line no-unused-vars
const SimpleDb = require('../src/SimpleDb');

describe('SimpleDb', () => {
  const rootDir = './__tests__/root';
  beforeEach(() => {
    return rm(rootDir, { force: true, recursive: true }).then(() => mkdir(rootDir, { recursive: true }));
  });
it('should ')
    
});