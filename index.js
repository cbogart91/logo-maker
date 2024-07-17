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
    message: 'Please select a color',
    choices: ['Red', 'Green', 'Yellow']
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Please select a shape',
    choices: ['Circle', 'Triangle', 'Square']
  },
  // {
  //   type: 'input',
  //   name: 'shapeColor',
  //   message: 'Please enter the color for the shape'
  // },
];

inquirer
.prompt(questions)
.then((answers) => {
  let shape;
  if (answers.shape === 'circle'){
    shape = new Circle()
  }
  if (answers.shape === 'square'){
    shape = new Square()
  }
  if (answers.shape === 'triangle'){
    shape = new Triangle()
  }
  // shape.setColor(answers.shapeColor)

  const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
  </svg>`


  fs.writeFile('SVG-Generator.svg', svgFile, (err) => {
    if (err) throw err;
    console.log('File was saved!');
  });
})



