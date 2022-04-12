const inquirer = require('inquirer');

class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.role = '';
    
      this.getName = () => {
        return name;
      };
  
      this.getId = () => {
        return id;
      };
  
      this.getEmail = () => {
        return email;
      };
  
      this.getRole = () => {
        return this.role;
      };
    }
  }
  
  module.exports = Employee;