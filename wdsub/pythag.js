function compute() {
  let _inputArr = document.querySelectorAll("input");
  let _a = _inputArr[0].value;
  let _b = _inputArr[1].value;
  let _c = _inputArr[2].value;
  
  if ( _a = "" && _b = " " && _c = " ") {
    
    _a = _c**2 - _b**2;
    
  } else if ( _a = " " && _b = "" && _c = " ") {
    
    _b = _c**2 - _a**2;
  
  } else if ( _a = " " && _b = "" && _c = " ") {}
  
  
}
