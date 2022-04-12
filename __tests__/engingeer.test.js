const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
  it('initiates Engineer object', () => {
    const e = new Engineer('brian', 12345678, 'brianhgarcia@gmail.com');
    
    expect(typeof e).toBe('object');
  });

  it('creates the github username via constructor args', () => {
    const github = 'itsbrianfire';
    const e = new Engineer('brian', 12345678, 'brianhgarcia@gmail.com', github);

    expect(e.github).toBe(github);
  });

  it('getGitHub() returns GitHub username input by user', () => {
    const github = 'itsbrianfire';
    const e = new Engineer('brian', 12345678, 'brianhgarcia@gmail.com', github);

    expect(e.getGitHub()).toBe(github);
  });

  it(`getRole() returns 'Engineer'`, () => {
    const github = 'itsbrianfire';
    const e = new Engineer('brian', 12345678, 'brianhgarcia@gmail.com', github);

    expect(e.getRole()).toBe('Engineer');
  });
});