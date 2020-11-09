function createBase(Base){
    return function(number){
      return number+Base;
    }
  }
  
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));

