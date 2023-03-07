const fs = require("fs")
const inquirer = require("inquirer")
const {Circle,Square,Triangle} = require("./lib/sharp")
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

class Svg{
    constructor() {
        this.textElement = ""
        this.shapeElement =''
    }
    render() {
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">`
    }
    setTextElement(text,color) {
        this.textElement = `<text x="100" y="100" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}
const questions = [
    {
        type:"maxlength-input",
        name:"text",
        message:"text:input your company LOGO",
        maxLength:4,
    },
    {
        type:"input",
        name:"text-color",
        message:"text-color:input a color for your LOGO literal",
    },
    {
        type:"input",
        name:"shape-color",
        message:"shape-color:input a color for your LOGO background",
    },
    {
        type:"list",
        name:"shape",
        message:"which background shape would you like?",
        choices:["Circle","Square","Triangle"]

    }
]

function generatorLOGO() {
  return inquirer
    .prompt(questions)
    .then((answers) => {
      // Save the user's answers to a variable
      const { text, 'text-color': textColor, 'shape-color': shapeColor, shape } = answers;

      const svg = new Svg();

      // Set the TextElement
      svg.setTextElement(text, textColor);

      // Set the ShapeElement 
       if (shape === 'Circle') {
        const circle = new Circle();
        circle.setColor(shapeColor);
        svg.setShapeElement(circle);
      } else if (shape === 'Square') {
        const square = new Square();
        square.setColor(shapeColor);
        svg.setShapeElement(square);
      } else if (shape === 'Triangle') {
        const triangle = new Triangle();
        triangle.setColor(shapeColor);
        svg.setShapeElement(triangle);
      }

      // Render the SVG 
      const svgObj = `${svg.render()}\n${svg.shapeElement}\n${svg.textElement}\n</svg>`;

      // Write the SVG to a file
      fs.writeFile('./LOGO.svg', svgObj, (err) => {
        if (err) throw err;
        console.log('LOGO.svg file has been generated!');
      });
    });
}
generatorLOGO();