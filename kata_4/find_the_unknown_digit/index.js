function solveExpression(exp) {
    let expArr = exp.split("");
    let filteredDigits = filterDigits(expArr);
    //pokud nelze nalezt číslo, protože 0-9 už existuji
    if(filteredDigits.length < 1) return -1;
    //objekt obsahující výraz rozdělený po částech
    let operationObject = solveParts(expArr);
    //vygenerované kombinace [ [vložené číslo, kompletní číslo ] ]
    let operand1Arr = replaceAllOccurs(operationObject.operand1, filteredDigits);
    let operand2Arr = replaceAllOccurs(operationObject.operand2, filteredDigits);
    let resultArr = replaceAllOccurs(operationObject.result, filteredDigits);
    //funkce který vyhodnoti všechny kombinace a vrátí bud rozluštěné číslo nebo -1
    return validateExpressions(operand1Arr, operand2Arr, operationObject.operation, resultArr);
  }
  
  function validateExpressions(operand1, operand2, operation, result) {
    let maxItems = Math.max(operand1.length, Math.max(operand2.length, result.length));
    let solved = false;
    let o1, o2, r, number;
    
    for(let i = 0; i < maxItems; i++) {
      o1 = operand1[0][0] === null ? operand1[0] : operand1[i][1];
      o2 = operand2[0][0] === null ? operand2[0] : operand2[i][1];
      r = result[0][0] === null ? result[0] : result[i][1];
      
      if(operand1[0][0] !== null) {
        number = +operand1[i][0];
        if(((operand1[0][1][0] == "0") || (operand1[0][1][0] == "-" && operand1[0][1][1] == "0")) && (operand1[0][1].length > 1) && i == 0) {
          continue;
        }
      }
      
      if (operand2[0][0] !== null) {
        number = +operand2[i][0];
          if(((operand2[0][1][0] == "0") || (operand2[0][1][0] == "-" && operand2[0][1][1] == "0")) && (operand2[0][1].length > 1) && i == 0) {
          continue;
        }
      }
      if(result[0][0] !== null){
        number = +result[i][0];
        if(((result[0][1][0] == "0") || (result[0][1][0] == "-" && result[0][1][1] == "0")) && (result[0][1].length > 1) && i == 0) {
          continue;
        }
      }
      
      o1 = parseInt(o1);
      o2 = parseInt(o2);
      r = parseInt(r);
      
      switch(operation) {
          case "+":
            solved = (o1 + o2) == r;
            break;
          case "-":
            solved = (o1 - o2) == r;
            break;
          case "*":
            solved = (o1 * o2) == r;
            break;
          default:
            break;
      }

      if(solved) {
        return number;
      }
    }
    return -1;
  }

  //rozděli výraz na jednotlive části, které vrátí jako objekt
  function solveParts(expArr) {
    let operationObject = {
      operand1: "",
      operand2: "",
      operation: "",
      result: ""
    };
    let index = 0;
    
    for(let i = index; i < expArr.length; i++) {
      if(i == 0) {
        operationObject.operand1 += expArr[i];
      } else {
        if(expArr[i] >= '*' && expArr[i] <= '-') {
          operationObject.operation += expArr[i];
          index++;
          break;
        }
        operationObject.operand1 += expArr[i];
      }
      index++;
    }
    
    for(let i = index; i < expArr.length; i++) {
      if(expArr[i] == "=") {
        index++;
        break;
      }
      operationObject.operand2 += expArr[i];
      index++;
    }
    
    for(let i = index; i < expArr.length; i++) {
      operationObject.result += expArr[i];
      index++;
    }
  
    return operationObject;
  }
  
  //vrati pole cisel, ktere se nevyskytuji ve vyrazu
  function filterDigits(expArr) {
    let digits = Array(10).fill(0).map((x, y) => x + y);
  
    
    for(let i = 0; i < expArr.length; i++) {
      if(expArr[i] >= '0' && expArr[i] <= '9'){
        if(digits.indexOf(+expArr[i]) >= 0) {
          digits.splice(digits.indexOf(+expArr[i]), 1);
        }
      }
    }
    
    return digits;
  }
  
  String.prototype.replaceAll = function (find, replace) {
      var str = this;
      return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
  };
   //nahradí otazníky všechnymi přípustnými čísly
  function replaceAllOccurs(str, availableNums) {
    let result = [];
    let tmp;
    let canContinue = false;
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] == "?") {
        canContinue = true;
      }
    }
    
    if(!canContinue) return [ [null, str] ];
    
    availableNums.forEach((n) => {
      tmp = str.replaceAll("?", ""+n);
      result.push([n, tmp]);
    });
    return result;
  }