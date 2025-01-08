function outerFunction() {
    let outerVariable = "I am from outer function";
    
    function innerFunction() {
      console.log(outerVariable);  // Accesses outerFunction's variable
    }
    
    return innerFunction;  // Returning the inner function
  }
  
  const closureFunc = outerFunction();  // outerFunction is called, but the innerFunction still remembers its scope
  closureFunc();  // Output: I am from outer function
  