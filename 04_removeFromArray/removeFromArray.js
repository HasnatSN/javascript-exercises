const removeFromArray = function(u_array, ...u_arg) {


    //////////////// Remove one single instance of the argument
    // index_of_arg = u_array.indexOf(u_arg);
    // u_array.splice(index_of_arg, 1);
    // return u_array;

    for (arg of u_arg) {
        for (item of u_array) {
            if (item === arg) {
                index_of_arg = u_array.indexOf(item);
                u_array.splice(index_of_arg, 1);
            };
        };
    }

    return u_array;

};

// Do not edit below this line
module.exports = removeFromArray;
