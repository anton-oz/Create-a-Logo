// write shape class constructors

class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text,
        this.textColor = textColor,
        this.shapeColor = shapeColor
    }
};

class Circle extends Shape {
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="70" cx="100" cy="100" fill="${this.shapeColor}"/>
    <text x="100" y="105" text-anchor="middle" fill="${this.textColor}" font-size="45" letter-spacing="3">${this.text}</text>
</svg>`;
    }
};

class Triangle extends Shape {
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,20 180,180 20,180" fill="${this.shapeColor}"/>
    <text x="100" y="125" text-anchor="middle" fill="${this.textColor}" font-size="45" letter-spacing="3">${this.text}</text>
</svg>`;
    }
};

class Square extends Shape {
    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="35" width="130" height="130" fill="${this.shapeColor}"/>
    <text x="100" y="105" text-anchor="middle" fill="${this.textColor}" font-size="45" letter-spacing="3">${this.text}</text>
</svg>`;
    }
};



module.exports = {
    Circle: Circle,
    Square: Square,
    Triangle: Triangle,
};