const queryString = require('querystring')

// Parse a query string into an object, and extract the object property:

var string = queryString.parse('year=2022&month=10&age=28&name=Kamal&designation=Freelancer')

/* object name : string = {
    name:Nuruzzaman,age:20 like this
}
*/

console.log(string.designation)



