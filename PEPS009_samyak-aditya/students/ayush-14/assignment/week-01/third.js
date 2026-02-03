function once(fn) {
    let done = false;
  
    return function () {
      if (done) return;
  
      done = true;
      fn();
    };
  }
  
  function greet() {
    console.log("Hello");
  }
  
  const greetOnce = once(greet);
  
  greetOnce();
  greetOnce();
  greetOnce();
  


