Cons.fromArray = function(array){
    //TODO provide a convenient method to convert a JavaScript array
    //to an algebraic list.
    let algList = null;
    
    function recursiveHelper(item) {
      if(array.indexOf(item) === array.length - 1) {
        return new Cons(item, null);
      } else {
        return new Cons(item, recursiveHelper(array[array.indexOf(item) + 1]));
      }
    }
    
    if(array instanceof Array) algList = recursiveHelper(array[0]);
    console.log(algList);
    
    return algList;
  };
  
  function filter(list, predicate){
    let array = toArray(list);
    let result= null;
    array = array.filter(predicate);
    result = Cons.fromArray(array);
    return result;
  }
  
  function map(list, mapper){
    let array = toArray(list);
    let result= null;
    array = array.map(mapper);
    result = Cons.fromArray(array);
    return result;
  }
  
  Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
  Cons.prototype.map = function(mapper){ return map(this, mapper); };