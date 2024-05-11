// write inquirer prompts, link shapes.js, output .svg file to examples

const {Square, Triangle, Circle} = require('./lib/shapes');

const {writeFile} = require('fs');

const inquirer = require('inquirer');

// inquirer.prompt([
//     {
//         type: 'list',
//         choices: ['circle', 'square', 'triangle'],
//         message: 'Please select a shape:',
//         name: 'shape'
//     },
//     {
//         type: 'input',
//         message: 'Logo text (can only be three characters, no spaces): ',
//         name: 'logoText',
//         validate: (input) => {
//             if (input.trim().length <= 3) {
//                 return true
//             } else {
//                 return 'Please only enter three characters :)'
//             }
//         }
//     }
// ])
// .then((answers) => {
//     let finalLogo;
//     switch (answers.shape) {
//         case 'circle':
//             const circleLogo = new Circle(answers.logoText, 'white', 'blue')
//             finalLogo = ciricleLogo.render()
//             break;
//         case 'square':
//             const squareLogo = new Square(answers.logoText, 'white', 'blue')
//             finalLogo = circleLogo.render()
//             break;
//         case 'triangle':
//             const triLogo = new Triangle(answers.logoText, 'white', 'blue')
//             finalLogo = circleLogo.render()
//             break;
//     }
    
//     writeFile('./examples/test.svg', finalLogo, (err) => 
//         err ? console.error(err) : console.log('woo-hoo success')
//     );
    
// })

writeFile('./examples/test.svg', new Circle('svf', 'white', 'blue').render(), err => 
    err ? console.error(err) : console.log('success')    
)



