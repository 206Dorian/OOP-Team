const Employee = require('../lib/Employee')

test('Does it create an employee object', ()=>{
const e = new Employee();
expect (typeof(e)).toBe('object')
});

test('Does it set name via constructor arguments', ()=>{
    const name = 0;
    const e = new Employee(name);
    expect (e.name).toBe("hi")
    });

    //test for id
    //test for email