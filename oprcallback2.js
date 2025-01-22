 function multiply(num, callback) {
    num = num * 2;
    callback(num);
}

function add(num, callback) {
    num = num + 10;
    callback(num);
}

function sub(num, callback) {
    num = num - 3;
    callback(num);
}

let num = 10;

multiply(num, function(result) {
    sub(result, function(result) {
        add(result, function(result) {
            console.log(result); // Logs the final result after all operations
        });
    });
});
