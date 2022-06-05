function pigIt(str){
    let arrOfWords = str.split(" ");
    let punctuation = [".", ",", "!", "?"];
    let resultArr = [];
    
    for(let i = 0; i < arrOfWords.length; i++) {
      let helper = arrOfWords[i].split("");
      
      if(!(punctuation.some(mark => mark == helper[0]))) {
        helper.splice(helper.length, 0, helper[0], "ay");
        helper.shift();
      }
      
      console.log(helper.join(""));
      resultArr.push(helper.join(""));
    }
  
    return resultArr.join(" ");
  }