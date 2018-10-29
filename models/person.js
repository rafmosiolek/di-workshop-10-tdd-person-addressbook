class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.emails = [];
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    addEmail(email) {
        this.emails.push(email);
    }
}

module.exports = Person;