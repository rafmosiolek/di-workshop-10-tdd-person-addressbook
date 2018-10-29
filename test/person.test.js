const chai = require('chai')
const expect = chai.expect

const Person = require('../models/person.js')

describe('Person', () => {
    it('should initialise properly', () => {
        var person = new Person("Joe", "Biggs", "1 Jan 1990");
        expect(person.firstName).to.equal("Joe");
        expect(person.lastName).to.equal("Biggs");
        expect(person.dateOfBirth).to.equal("1 Jan 1990");
        expect(person.emails).to.deep.equal([]);
        expect(person.phoneNumbers).to.deep.equal([]);
    })
    it('should capitalise first name', () => {
        var person = new Person("joe", "Biggs", "1 Jan 1990");
        expect(person.firstName).to.equal("Joe");
    })

    describe('Fullname method', () => {
        it('should print the full name', () => {
            var person = new Person("Alex", "Doe", "1 Jun 1989");
            expect(person.fullName()).to.equal("Alex Doe");
        })
    })

    describe('addEmail method', () => {
        it('should accept email and add it to emails array', () => {
            var person = new Person("Alex", "Doe", "1 Jun 1989");
            person.addEmail('alex.doe@gmail.com');
            person.addEmail('alex.doe@example.com');
            expect(person.emails).to.deep.equal(['alex.doe@gmail.com', 'alex.doe@example.com']);
        })
    })

    describe('addPhoneNumber method', () => {
        it('should accept phone number and add it to phoneNumbers array', () => {
            var person = new Person("Alex", "Doe", "1 Jun 1989");
            person.addPhoneNumber('123-456-789');
            person.addPhoneNumber('07473457899');
            expect(person.phoneNumbers).to.deep.equal(['123-456-789', '07473457899']);
        })
    })

    describe('returnFormattedDetails method', () => {
        it('should return all the information about the person', () => {
            var person = new Person("Alex", "Doe", "1 Jun 1989");
            person.addEmail('alex.doe@gmail.com');
            person.addEmail('alex.doe@example.com');
            person.addPhoneNumber('123-456-789');
            person.addPhoneNumber('07473457899');
            expect(person.returnFormattedDetails()).to.deep.equal(
                    "Alex Doe" + "\n" + 
                    "----------" + "\n" + 
                    "DOB: 1 Jun 1989" + "\n" + "\n" +
                    "Email Addresses:" + "\n" + "alex.doe@gmail.com, alex.doe@example.com" + "\n" + "\n" +
                    "Phone Numbers:" + "\n" + "123-456-789, 07473457899"
            );
        })
    })
})