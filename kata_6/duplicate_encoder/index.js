function duplicateEncode(word){
    let arr = word.split("");
    let newArr = [];
    console.log(arr);
    
    for(let i = 0; i < arr.length; i++) {
      let sortArr = arr.filter(char => char.toLowerCase() === arr[i].toLowerCase());
      console.log(sortArr);
      if(arr[i] === "(") {
        newArr[i] = ")";
      } else if(arr[i] === ")") {
        newArr[i] = "(";
      } else if(arr[i] === "@") {
        newArr[i] = "(";
      } else if(sortArr.length > 1) {
        newArr[i] = ")";
      } else if(sortArr.length === 1) {
        newArr[i] = "(";
      }
    }
    console.log(newArr.join(""));
    return newArr.join("");
  }