const reverseString = function(u_string) {

    let a_string = u_string.split('');
    let reversed_string = [];
    let loop_range = a_string.length;

    for (i = 0; i < loop_range; i++) {
        reversed_string.push(a_string[a_string.length - 1]);
        a_string.pop();
    };
    let output = reversed_string.join('');
    return output;

};

// Do not edit below this line
module.exports = reverseString;
