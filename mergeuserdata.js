const userDetails = {name: 'CVR', age: 25};
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'};
const userPreferences = {theme: 'Engineering Edu', language: 'EN'};
const merge={...userDetails,...userAddress,...userPreferences}
console.log(merge)