
const inquirer = require("inquirer");
const fs = require("fs");
const {Triangle, Circle, Square} = require("./lib/shapes.js");
const SVG = require("./lib/svg");


function questionPrompt(){
    inquirer
        .prompt([
            {
                name: "text",
                type:"input",
                message:"Please choose the text for the shape (3 character maximum)",
                validate: (letters) => {
                    if (letters.length > 3){
                        return "Please enter only 3 characters"
                    }
                    return true
                }
            },
            {
                name: "color",
                message: "Please choose a text color",
                type:"list",
                choices:["Green", "Blue", "Yellow"]
            },
            {
                name: "shape",
                message: "Please choose a shape",
                type: "list",
                choices: ["Triangle", "Circle", "Square"]
            },
            {
                name: "shape_color",
                message: "Please choose a shape color",
                type: "list",
                choices:["Green", "Blue", "Yellow"]
            }
        ])
        .then(response => {
            const mySVG = new SVG()
            mySVG.setText(response.text, response.color)

            if (response.shape === "Triangle"){
                const myTriangle = new Triangle()
                myTriangle.setColor(response.shape_color)
                mySVG.setShape(myTriangle)
            }
            else if (response.shape === "Circle"){
                const myCircle = new Circle()
                myCircle.setColor(response.shape_color)
                mySVG.setShape(myCircle)
            }
            else {
                const mySquare = new Square()
                mySquare.setColor(response.shape_color)
                mySVG.setShape(mySquare)
            }

            return fs.writeFile("logo.svg", mySVG.render(), (err) =>
                err ? console.log(err) : console.log("Generated logo.svg")
        );
    })
}

questionPrompt();