function foo(x){
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1; 
  } else {
    return x * x; 
  }
}

console.log(foo(null)); // 0
console.log(foo(-1));  // -1
console.log(foo(2));   // 4
console.log(foo(NaN)); // NaN