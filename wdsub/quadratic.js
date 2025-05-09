function compute() {
  let _inputArr = document.querySelectorAll ("input");
  let _a = _inputArr[0].value;
  let _b = _inputArr[1].value;
  let _c = _inputArr[2].value;
  let _s1;
  let _s2;
  
  if(_a != "" && _b != "" && _c != "") {
    _s1 = (-_b + Math.sqrt (_b**2 - 4*_a*_c) ) / (2*_a);
    _s2 = (-_b - Math.sqrt (_b**2 - 4*_a*_c) ) / (2*_a);  
    
    document.getElementById("s1").innerHTML=_s1;
    document.getElementById("s2").innerHTML=_s2;
    
  } else {
    window.alert("Please fill out all coefficient boxes.")
  }
  
}
