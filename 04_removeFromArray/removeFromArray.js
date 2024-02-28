const removeFromArray = function(array, ...omissions) {
array.indexOf(omissions)
}
// Do not edit below this line
module.exports = removeFromArray;


/*
find{
    indexOf(omissions);
} if (indexOf(omissions) === - 1) {
    omissions++
}
Find index of omissions
splice array element if the index equals the omissions
If the index of the omission cannot be found 
iterate to the next omission
return array
*/