class Display{

     constructor(){
    this.answer = [];

}
  element(atribute){
        this.answer.push(atribute);
        return this.answer;
        
    }

    
}
let display = new Display();
export default display;