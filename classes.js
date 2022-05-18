
// context vs scope
const object4 = {
    a: function() {
        console.log(this);
    }
}

// instantiation
class Player {
    constructor(name, type) {
        console.log(this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

let player1 = new Player('John', 'cowboy');

class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
    }
    play() {
        console.log(`WEEEEEE I'm a ${this.type}`);
    }
}
let wizard1 = new Wizard('Shelly', 'Healer');
// wizard1.play();
// wizard1.introduce();


