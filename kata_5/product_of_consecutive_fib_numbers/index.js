function productFib(prod){
    let controlledFibSeq = fibArray(prod);
    
    for(let i = 0; i < controlledFibSeq.length; i++) {
      if(controlledFibSeq[i] * controlledFibSeq[i + 1] == prod) {
        return [controlledFibSeq[i], controlledFibSeq[i + 1], true];
      }
      
      if(controlledFibSeq[i] * controlledFibSeq[i + 1] > prod) {
        return [controlledFibSeq[i], controlledFibSeq[i + 1], false];
      }
    }
    
    return "error";
  }
  
  function fibArray(toNum) {
    let fibonacciArray = [0, 1, 1];
    
    while(fibonacciArray[fibonacciArray.length - 1] < toNum) {
      let nextNumber = fibonacciArray[fibonacciArray.length - 1] + fibonacciArray[fibonacciArray.length - 2];
      if(nextNumber > toNum) return fibonacciArray;
      fibonacciArray.push(nextNumber);
    }
    
    return fibonacciArray;
  }