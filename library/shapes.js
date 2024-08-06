class Shape {
    constructor() {
        this.color = " "
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    constructor() {
        super();
    }
        render() {
        return `<circle cx="150" cy="100" r="95" fill="${this.color}"/>`
    }
};

class Square extends Shape {
    constructor(){
        super();
    }
    render() {
        return `<rect x="55" y="10" width="200" height="200" fill="${this.color}"/>`
    }
};

class Triangle extends Shape {
    constructor() {
        super();
    }
    render() {
        return `<polygon points="150 10, 275 190, 25 190" fill="${this.color}"/>`
    }
};


module.exports = { Circle, Square, Triangle };