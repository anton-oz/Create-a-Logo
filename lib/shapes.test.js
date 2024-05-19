// write tests for shape class constructors
const shapes = require('../lib/shapes');

describe('shape tests', () => {

    describe('circle', () => {
        it('should return a blue circle with white text', () => {
            const triLogo = new shapes.Triangle()
            triLogo.shapeColor = 'blue'
            expect(triLogo.render()).toEqual(`<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
            <polygon points="100,20 180,180 20,180" fill="blue"/>
            <text x="100" y="125" text-anchor="middle" fill="" font-size="45" letter-spacing="3"></text>
        </svg>`)
        })
    })
})