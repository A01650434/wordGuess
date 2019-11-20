function letter(value){
    this.buchstabe = value;
    this.guessed = false;

    this.toString = function(){
        if(this.buchstabe === " "){
            this.guessed = true;
            return " ";
        } else {
         if(this.guessed === false){
             return "_";
         }else{
             return this.buchstabe;
         }
        }
    };
    this.guess = function(guess) {
        if (guess === this.buchstabe) {
          this.guessed = true;
        }
      };
}
module.exports = letter;