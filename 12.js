let test={
    x:10,
    y:20,
    z:30
} 

//unpack object(destructuring)
let {x,y,z}=test;
console.log(x);//10
console.log(y);//20
console.log(z);//30

//complex object
let student={
    sno:100,
    name:"Ram",
    marks:[90,89,95],
    address:{
        city:"Hyd",
        pincode:500032
    },

    getData:function(){
        //object processing business logic
        console.log("hello from getData");
    },
    getAverage:function(){
        let total=0;
        for(let i in this.marks){
            total+=this.marks[i];
        }
        console.log(total/this.marks.length);
    }
}

console.log(student.marks);
console.log(student.address.ciy);
console.log(student.getData());
console.log(student.getAverage());
