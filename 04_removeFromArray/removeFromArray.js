const removeFromArray = function(array, ...omissions) {
    for (let i = 0; i < omissions.length; i++) {
        let omissionsIndex = array.indexOf(omissions[i]);
        array.splice(omissionsIndex, 1)
    }
    return array;
    }

// Do not edit below this line
module.exports = removeFromArray;
/*
    let omissionsIndex = array.indexOf(omissions);
    array.splice(omissionsIndex, 1);
    return array;
*/