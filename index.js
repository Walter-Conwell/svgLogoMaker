
const inquirer = require("inquirer");
const fs = require('fs');

const {Square, Circle, Triangle} =  require("./lib/shapes");
const SVG = require("./lib/svg");
const {writeFile} = require("fs/promises");

const svgGen = () => {
  inquirer.prompt([
      {
        type: 'input',
        name: 'logoText',
        message: 'Desired text (3 characters)',
        validate: (logoText) => logoText.length <= 3 || "THREEEEEEEE"
      },
      {
        type: 'input',
        name: 'logoColor',
        message: 'Your desired logo color?',
      },
      {
        type: 'list',
        name: 'logoShape',
        message: 'and desired logo shape?',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'logoShapeColor',
        message: 'Now how about the color of the shape?',
      },
    ])

        .then(({logoText, logoColor, logoShape, logoShapeColor}) => {
            let shapeEl 
            switch (logoShape) {
                case "circle": 
                    shapeEl = new Circle()
                    break;
                case "square": 
                    shapeEl = new Square()
                    break;
                case "triangle": 
                    shapeEl = new Triangle()
                    break;
        
            }
            shapeEl.setColor(logoShapeColor)
            const svg = new SVG()
            svg.setText(logoText, logoColor)
            svg.setShape(shapeEl)
            return writeFile("userLogo.SVG", svg.render())
        })
        .then(() => {
            console.log("Done, process fulfilled!")
        })
        .catch((err) => {
            console.log(err)
            console.log("Unsuccessful")
          })
      }
//Invokes the function
svgGen()