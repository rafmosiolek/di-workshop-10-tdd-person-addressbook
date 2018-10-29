class Person {
    constructor(firstName, lastName, dateOfBirth) {
        this.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.emails = [];
        this.phoneNumbers = [];
    }

    fullName() {
        return this.firstName + " " + this.lastName;
    }

    addEmail(email) {
        this.emails.push(email);
    }

    addPhoneNumber(phoneNumber) {
        this.phoneNumbers.push(phoneNumber);
    }

    returnFormattedDetails() {
        return [
            this.fullName(),
            '----------',
            'DOB: ' + this.dateOfBirth, 
            '',
            'Email Addresses:',
            this.emails.join(', '),
            '',
            'Phone Numbers:',
            this.phoneNumbers.join(', ')
        ].join('\n');
    }
}

module.exports = Person;