let object1 = { value: 10};
console.log(object1.value);
let object2 = object1;
console.log(object2.value);
let object3 = { value: 10};
console.log(object3.value);

console.log(object1 === object2); // true
console.log(object1 === object3); // false
object1.value = 15;
console.log(object2.value); // 15
console.log(object3.value); // 10


