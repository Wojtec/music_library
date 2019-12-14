class Display{


  element(element){
    this.answer = [];

        this.answer.push(element);
        console.log(element);

        return this.answer;
    }

    
}
let display = new Display;
export default display;