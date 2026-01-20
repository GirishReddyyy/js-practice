const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let total=0;
let m=Object.values(marks)

for(let i in m){
    total+=m[i];
}

console.log(total)
console.log("avg",total/m.length)

let highestScore=0;
for(let i in m){
    if(m[i]>highestScore)
        highestScore=m[i];
}

console.log('high score',highestScore);

marks.computer=90;

console.log(Object.keys(marks))
console.log(Object.values(marks))
