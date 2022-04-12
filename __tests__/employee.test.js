const Employee = require('../lib/Employee');

describe('Employee', () => {
  it('initiates Employee object', () => {
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com');
    
    expect(typeof e).toBe('object');
  });

  it('sets the name via constructor args', () => {
    const name = 'brian';
    const e = new Employee(name);

    expect(e.name).toBe(name);
  });

  it('sets the id via constructor args', () => {
    const id = 12345678;
    const e = new Employee('brian', id);

    expect(e.id).toBe(id);
  });

  it('sets the email via constructor args', () => {
    const email = 'brianhgarcia@gmail.com';
    const e = new Employee('brian', 12345678, email);

    expect(e.email).toBe(email);
  });

  it(`sets role to '' as it isn't applicable when calling Employee`, () => {
    const role = '';
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com', role);

    expect(e.role).toBe(role);
  });

  it('getName() returns name input by user', () => {
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com');

    expect(e.getName()).toBe('brian');
  });

  it('getId() returns name input by user', () => {
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com');

    expect(e.getId()).toBe(12345678);
  });

  it('getEmail() returns name input by user', () => {
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com');

    expect(e.getEmail()).toBe('brianhgarcia@gmail.com');
  });

  it(`getRole() returns ''`, () => {
    const e = new Employee('brian', 12345678, 'brianhgarcia@gmail.com');

    expect(e.getRole()).toBe('');
  });
});