const repeatString = function(strr,n) {
    
let retStrings="";
for(i=0;i<n;i++){
    retStrings+=" "+strr;
}
return retStrings;
};
console.log(repeatString("Hello",3))

// Do not edit below this line
module.exports = repeatString;
