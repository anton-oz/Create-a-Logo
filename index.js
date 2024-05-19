// write inquirer prompts, link shapes.js, output .svg file to examples

const {Square, Triangle, Circle} = require('./lib/shapes');

const {writeFile} = require('fs');

const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'list',
        choices: ['circle', 'square', 'triangle'],
        message: 'Please select a shape:',
        name: 'shape'
    },  
    {
        type: 'input',
        message: 'What Color would you like your shape',
        name: 'shapeColor'
    },
    {
        type: 'input',
        message: 'Logo text (can only be three characters, no spaces): ',
        name: 'logoText',
        validate: (input) => {
            if (input.trim().length <= 3) {
                return true
            } else {
                return 'Please only enter three characters :)'
            }
        }
    },
    {
        type: 'input',
        message: 'What color would you like the text to be? ',
        name: 'textColor'
    }
])
.then((answers) => {
    let finalLogo;
    switch (answers.shape) {
        case 'circle':
            const circleLogo = new Circle(answers.logoText, answers.textColor, answers.shapeColor)
            finalLogo = circleLogo.render()
            break;
        case 'square':
            const squareLogo = new Square(answers.logoText, answers.textColor, answers.shapeColor)
            finalLogo = squareLogo.render()
            break;
        case 'triangle':
            const triLogo = new Triangle(answers.logoText, answers.textColor, answers.shapeColor)
            finalLogo = triLogo.render()
            break;
    }
    
    writeFile('./examples/logo.svg', finalLogo, (err) => 
        err ? console.error(err) : console.log('Generated logo.svg')
    );
    
})

// writeFile('./examples/test.svg', new Square('svf', 'white', 'red').render(), err => 
//     err ? console.error(err) : console.log('success')    
// )



