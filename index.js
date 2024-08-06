const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./library/shapes');


const questions = [
    {
    type: 'input',
    name: 'username',
    message: 'Please enter three characters'
  },
  {
    type: 'list',
    name: 'textColor',
    message: 'Please select a color for your characters',
    choices: ['Red', 'Green', 'Yellow']
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Please enter a color for the shape'
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log('Selected shape:', answers.shape);
    
  let shape;
  switch (answers.shape){
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;  
    default:
      throw new Error('Invalid shape');
  }

shape.setColor(answers.shapeColor);

  const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  ${shape.render()}
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.username}</text>
  </svg>`;


  fs.writeFile('SVG-Generator.svg', svgFile, (err) => {
    if (err) throw err;
    console.log('File was saved!');
  })
  });
// .catch((error) => {
//   console.error('Error:', error);
// })
