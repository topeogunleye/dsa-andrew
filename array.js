const strings =
    ['a', 'b', 'c', 'd'];
    //0    1    2    3
// 4*4 = 16 bytes of storage

//push
strings.push('e'); // O(1)

//pop
strings.pop(); // O(1)
strings.pop(); // O(1)

//unshift
strings.unshift('x'); // O(n)

//splice
strings.splice(2, 0, 'alien'); //O(n)
console.log(strings); // O(1)

