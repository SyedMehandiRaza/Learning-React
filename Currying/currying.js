function sum(x) {
  return function add(y){
    return function jodo(z){
      return x+y+z;
    }
  }

}
const resSum =sum(20);
console.log(resSum);
const resAdd = resSum(30);
console.log(resAdd);
const res = resAdd(10);
console.log(res);