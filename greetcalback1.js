function greet(name, callback) {

    return callback(`Hello, ${name}!`);
}
const callbackFunction = (message) => {
    return message.toUpperCase(); 
};
let greeting = greet("Ritvik", callbackFunction);
console.log(greeting); 
