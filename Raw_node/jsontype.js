const person = {
    name:'Nuruzzaman',
    age:'28',
    profession:'Enginner'
}

//JSON.stringify() function converts any objects into json String //

console.log(JSON.stringify(person))

//JSON.parse() function converts any json string into javascript object //

console.log(JSON.parse('{"name":"Nuruzzaman","age":"28","profession":"Enginner"}'))