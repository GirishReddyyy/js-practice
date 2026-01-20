let emp={
    eno:1,
    name:"Ram"
}

//accesing properties
console.log(emp.eno);//1

//adding new property
emp.city="Hyd";

//modifying existing property
emp.eno=123;

//deleting existing property
delete emp.name;

//freezing the object to make it immutable
Object.freeze(emp);

emp.eno=999; //will not change
emp.country="India"; //will not add
emp.mobile=9999999999; //will not add

console.log(emp);

//read keys
console.log(Object.keys(emp));
//read values
console.log(Object.values(emp));