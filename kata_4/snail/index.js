function helper(array, res) {
    if(!array.length) {
      return res;
    } else {
      let x = array[0].length;
      let y = array.length;
      
      for(let i = 0; i < x; i++) {
      res.push(array[0][i]);
      }
      array.shift();
      y--;
      
      if(!array.length) return res;
      
      for(let i = 0; i < y; i++) {
        res.push(array[i][x-1]);
        array[i].pop();
      }
      x--;
      
      for(let i = 0; i < x; i++) {
        res.push(array[y-1][x - i - 1]);
      }
      array.pop();
      y--;
      
      if(!array.length) return res;
      
      for(let i = 0; i < y; i++) {
        res.push(array[y - i - 1][0]);
        array[y - i - 1].shift();
      }
     
     return helper(array, res); 
    }
  }
  
  snail = (array) => {
    let res = [];
    return helper(array, res);
  }