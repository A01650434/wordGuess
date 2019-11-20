var letter = require("./letter.js");

function word(ans){
this.arr = [];

for(var i=0; i<ans.length; i++){
    var buchstabe = new letter(ans[i]);
    this.arr.push(buchstabe);
}

this.log = function(){
ansIn = "";
for (var i=0; i<this.arr.length; i++){
    ansIn += this.arr[i] + " ";
}
console.log(ansIn + "\n=================\n");
};

this.userGuess = function(input){
    for(var i=0; i<this.arr.length; i++){
        this.arr[i].guess(input);
    }
};
}

module.exports = word;