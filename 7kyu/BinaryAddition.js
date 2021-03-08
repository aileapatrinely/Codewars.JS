function addBinary(a,b) {
    let sum= (a+b);
    let binary = '';
    if(sum>0){
      binary = (sum).toString(2);
    }
    return binary;
  }