const removeFromArray = function(arr,num) {
  let a=arr.filter(i=>i!==3);
  return a;
};
const removeFromArray_=function(arr,num){
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=num){
            arr2.push(arr[i]);

        }

    }
    return arr2;
}
console.log(removeFromArray([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]
console.log(removeFromArray_([1, 2, 3, 4], 3)); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
