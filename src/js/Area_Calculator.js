class Shape {
    name;

    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    width;
    height;

    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    toString() {
        document.getElementById('display').innerHTML = `Area of this ${this.name} is ${this.area()}`;
    }
}

class Ellipse extends Shape {
    smallRadius;
    bigRadius;

    constructor(name, smallRadius, bigRadius) {
        super(name);
        this.smallRadius = smallRadius;
        this.bigRadius = bigRadius;
    }

    area() {
        return Math.PI * this.smallRadius * this.bigRadius;
    }

    toString() {
        document.getElementById('display').innerHTML = `Area of this ${this.name} is ${this.area()}`;
    }
}

class Circle extends Ellipse {
    constructor(name, radius) {
        super(name);
        this.smallRadius = radius;
        this.bigRadius = radius;
    }
}

class Square extends Rectangle {

    constructor(name, side) {
        super(name);
        this.width = side;
        this.height = side;
    }
}

function choice() {
    const sA = document.getElementsByClassName('sizeA');
    const sB = document.getElementsByClassName('sizeB');
    sA[0].style.opacity = '1';
    sA[1].style.opacity = '1';
    if (document.getElementById('shapes-choice').value === 'Rectangle') {
        sA[0].innerText = 'Enter the length of the first side of the rectangle';
        sB[0].style.opacity = '1';
        sB[1].style.opacity = '1';
        sB[0].innerText = 'Enter the length of the second side of the rectangle';

    } else if (document.getElementById('shapes-choice').value === 'Square') {
        sA[0].innerText = 'Enter the length of side of the square';

    } else if (document.getElementById('shapes-choice').value === 'Ellipse') {
        sA[0].innerText = 'Enter a larger radius of the ellipse';
        sB[0].style.opacity = '1';
        sB[1].style.opacity = '1';
        sB[0].innerText = 'Enter a smaller radius of the ellipse';

    } else if (document.getElementById('shapes-choice').value === 'Circle') {
        sA[0].innerText = 'Enter a radius of the circle';

    }
}

function calculate() {
    if (document.getElementById('shapes-choice').value === 'Rectangle') {
        let firstSize = document.getElementById('sizeA').value;
        let secondSize = document.getElementById('sizeB').value;
        const rec = new Rectangle('rectangle', firstSize, secondSize);
        rec.toString();
    } else if (document.getElementById('shapes-choice').value === 'Square') {
        let size = document.getElementById('sizeA').value;
        const sq = new Square('square', size);
        sq.toString();
    } else if (document.getElementById('shapes-choice').value === 'Ellipse') {
        let bigRadius = document.getElementById('sizeA').value;
        let smallRadius = document.getElementById('sizeB').value;
        const el = new Ellipse('ellipse', bigRadius, smallRadius);
        el.toString();
    } else if (document.getElementById('shapes-choice').value === 'Circle') {
        let radius = document.getElementById('sizeA').value;
        const cir = new Circle('circle', radius);
        cir.toString();
    }
}


