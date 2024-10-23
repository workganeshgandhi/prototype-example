const object1 = { name: "Alice", age: 30, city: "New York" };
const object2 = { color: "blue", size: 10 };

Object.setPrototypeOf(object2, object1);

console.log(object2.name); // Output: Alice
console.log(object2.age);  // Output: 30
console.log(object2.city); // Output: New York
console.log(object2.color); // Output: blue
console.log(object2.size);  // Output: 10
