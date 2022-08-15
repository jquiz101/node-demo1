let message = "Hello World";
console.log(message);

let lodash = require("lodash");

let name = "brittany";
console.log("Name: " + name);

name = lodash.toUpper(name);
console.log("toUpper name: " + name);

name = lodash.lowerCase(name);
console.log("lowerCase name: " + name);

name = lodash.upperCase(name);
console.log("upperCase name: " + name);

name = lodash.lowerCase(name);
console.log("lowerCase name: " + name);

name = lodash.startCase(name);
console.log("startCase name: " + name);