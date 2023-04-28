
class SVG{
    constructor(){
        this.texetEle =""
        this.shapeEle = ""
    }

render(){

}
    setText(message,color){
        if(message.length > 3){
            throw new Error ("Invalid String")
        }
        
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
    }

    setShape(){
        this.shapeEle = shape.render();
    }
}

module.exports = SVG;