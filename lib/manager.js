const Employee = require("./employee");
class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, title, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;