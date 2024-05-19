// write tests for shape class constructors
const {Triangle, Circle, Square} = require('../lib/shapes');

describe('shape tests', () => {

    describe('Triangle', () => {
        it("should return a blue triangle with white text displaying 'abc' ", () => {
            const triLogo = new Triangle()
            triLogo.shapeColor = 'blue'
            triLogo.text = 'abc'
            triLogo.textColor = 'white'
            expect(triLogo.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <polygon points="100,20 180,180 20,180" fill="${triLogo.shapeColor}"/>
    <text x="100" y="125" text-anchor="middle" fill="${triLogo.textColor}" font-size="45" letter-spacing="3">${triLogo.text}</text>
</svg>`)
        })
    })

    describe('Circle', () => {
        it("should return green circle with orange text displaying 'abc' ", () => {
            const circleLogo = new Circle()
            circleLogo.shapeColor = 'green'
            circleLogo.text = 'abc'
            circleLogo.textColor = 'orange'
            expect(circleLogo.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <circle r="70" cx="100" cy="100" fill="${circleLogo.shapeColor}"/>
    <text x="100" y="105" text-anchor="middle" fill="${circleLogo.textColor}" font-size="45" letter-spacing="3">${circleLogo.text}</text>
</svg>`)
        })
    })

    describe('Square', () => {
        it("should return a yellow square with black text displaying 'abc' ", () => {
            const squareLogo = new Square()
            squareLogo.shapeColor = 'yellow'
            squareLogo.text = 'abc'
            squareLogo.textColor = 'black'
            expect(squareLogo.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
    <rect x="35" y="35" width="130" height="130" fill="${squareLogo.shapeColor}"/>
    <text x="100" y="105" text-anchor="middle" fill="${squareLogo.textColor}" font-size="45" letter-spacing="3">${squareLogo.text}</text>
</svg>`)
        })
    })
})