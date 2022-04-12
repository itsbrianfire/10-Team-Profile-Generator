const Manager = require('../lib/Manager');

describe('Manager', () => {
  it('initiates Manager object', () => {
    const e = new Manager('brian', 12345678, 'brianhgarcia@gmail.com', 125);
    
    expect(typeof e).toBe('object');
  });

  it('creates officeNumber via constructor args', () => {
    const officeNumber = 125;
    const e = new Manager('brian', 12345678, 'brianhgarcia@gmail.com', officeNumber);

    expect(e.officeNumber).toBe(officeNumber);
  });

  it('officeNumber() returns Office Nmber input by user', () => {
    const officeNumber = 125;
    const e = new Manager('brian', 12345678, 'brianhgarcia@gmail.com', officeNumber);

    expect(e.getOfficeNumber()).toBe(officeNumber);
  });

  it(`getRole() returns 'Manager'`, () => {
    const officeNumber = 125;
    const e = new Manager('brian', 12345678, 'brianhgarcia@gmail.com', officeNumber);

    expect(e.getRole()).toBe('Manager');
  });
});