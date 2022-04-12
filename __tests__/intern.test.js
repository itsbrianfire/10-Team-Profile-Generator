const Intern = require('../lib/Intern');

describe('Intern', () => {
  it('initiates Intern object', () => {
    const e = new Intern('brian', 12345678, 'brianhgarcia@gmail.com', 'Georgia State University');
    
    expect(typeof e).toBe('object');
  });

  it('creates school via constructor args', () => {
    const school = 'Georgia State University';
    const e = new Intern('brian', 12345678, 'brianhgarcia@gmail.com', school);

    expect(e.getSchool()).toBe(school);
  });

  it(`getRole() returns 'Intern'`, () => {
    const school = 'Georgia State University';
    const e = new Intern('brian', 12345678, 'brianhgarcia@gmail.com', school);

    expect(e.getRole()).toBe('Intern');
  });
});