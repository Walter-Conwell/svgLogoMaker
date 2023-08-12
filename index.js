
const { default: inquirer } = require("inquirer");
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
        set
        setColor.then(({logoText, logoColor, logoShape, logoShapeColor}) => {
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
                    //ends function
                    break;
        
            }
            shapeEl.setColor(logoShapeColor)
            const svg = new SVG()
            svg.setText(logoText, logoColor)
            svg.setShape(shapeEl)
            return writeFile("userLogo.SVG", svg.render())
        })
        .then(() => {
            console.log("Success!!!")
        })
        .catch((err) => {
            // const svgChoice = svgGen(userSelection);
            //aa
            // fs.writeFile("", svgChoice, (err) =>
            //   err ? console.log(err) : console.log('Success!')
            // );
            console.log(err)
            console.log("Failure! Try again!")
          });
      },
    ]);
  };
  
  
//.svg logo

// //render() {
//     return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
//   }
// const createShape = (color) => {
// }
// const createLogo = (data) =>
//create prompt function for inputs
//limit of only 3 characters
//text color

//prompts for the svg creation - function




//Invokes the function
svgGen()