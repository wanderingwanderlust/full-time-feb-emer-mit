var greg =  {
    name: 'Greg',
    dob: 1988,
    job: 'Software Engineer'
}

var Person = function(name, dob, job) {
    this.name = name;
    this.dob = dob;
    this.job = job


    this.calculateAge = function() {
        console.log( 2021- this.dob)
    }
}

Person.prototype.calculateAge = function() {
    console.log(2021 - this.dob);
}

Person.prototype.lastName = 'Lindeman';

var Daniel = new Person('Daniel', 2012, 'Software Developer');
var Hunter = new Person('Hunter', 2010, 'Software Developer');
var Jacqueline = new Person('Jacqueline', 2016, 'Software Developer');

Daniel.calculateAge()
Hunter.calculateAge()
Jacqueline.calculateAge()

var personPrototype = {
    calculateAge: function() {
        console.log(2022 - this.dob);
    }
}

var Greg = Object.create(personPrototype);

Greg.name = 'Greg'