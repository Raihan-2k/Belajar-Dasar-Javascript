function minimal(a,b){
  if(a<=b){
    return a;
  }else if (a==b){
    return a;
  }else {
    return b;
  }
}

console.log(minimal(1, 4));
console.log(minimal(3, 2));
console.log(minimal(3, 3));

let power = function (a,b){
  let result = a**b;
    return result;
}

console.log(power(1, 4));
console.log(power(3, 2));
console.log(power(3, 3));

module.exports = { minimal, power };