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

    describe('Add email method',() => {
        it('should accept email and add it to emails array', () => {
            var person = new Person("Alex", "Doe", "1 Jun 1989");
            person.addEmail('alex.doe@gmail.com');
            person.addEmail('alex.doe@example.com');
            expect(person.emails).to.deep.equal(['alex.doe@gmail.com', 'alex.doe@example.com']);
        })
    })
})