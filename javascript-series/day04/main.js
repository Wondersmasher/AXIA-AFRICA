// STANDARD FOR LOOP
// FORWARD LOOP, BACKWARD LOOP
// FOR OF
// FOR IN
// WHILE
// DO WHILE

const names = [
    "Akinniyi Ezekiel Wonderful", 
    "Samuel Sunday", 
    "Philip Philimon", 
    "Chinedu Azikwe", 
    "Joshua John",
    "Axia Africa",
    "Solomon David"
]

const printName = (name, i) => {
    console.log(`This is the name to be printed: ${name} with index: ${i}`)
}


// FORWARD LOOP
console.log("THIS IS FORWARD LOOP")
for(let i = 0; i < names.length; i++){
    printName(names[i], i)
}

// BACKWARD LOOP
console.log("THIS IS BACKWARD LOOP")
for(let i = names.length -1; i >0; i--){
        printName(names[i], i)
}

// FOR OF LOOP
console.log("FOR OR LOOP")
for(const value of names){
    console.log(`This is the name to be printed: ${value}`)
}

// FOR IN LOOP
const testObj = {
    name:"Akinniyi Ezekiel Wonderful",
    role:"Student",
    course:"Mobile Development",
    key:"this is the key"
}
console.log("FOR IN LOOP")

for(const key in testObj){
    console.log(`This is the name to be printed: ${testObj[key]}, with a key of ${key}`)
}

// WHILE LOOP
let testWhile = 0
while(testWhile < 15){
console.log(testWhile)
 testWhile++
}




// DO WHILE LOOP - IT ALWAYS RUN AT LEAST ONCE
testWhile = 0
do{
console.log("This has to run at least once...")
testWhile++
}while(testWhile ===0)